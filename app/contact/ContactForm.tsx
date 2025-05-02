"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      setSubmitError("Name and phone number are required");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await addDoc(collection(db, "booking_data"), {
        ...formData,
        timestamp: new Date(),
        status: "new"
      });
      
      setSubmitSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        treatment: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Book an Appointment
      </h2>
      
      {submitSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <p>Thank you! Your appointment request has been submitted successfully.</p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="mt-2 text-sm text-green-600 hover:text-green-800"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {submitError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {submitError}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
          
          <div>
            <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Treatment Required
            </label>
            <select
              id="treatment"
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            >
              <option value="">Please select</option>
              <option value="joint-replacement">Joint Replacement</option>
              <option value="spine-surgery">Spine Surgery</option>
              <option value="sports-injury">Sports Injury</option>
              <option value="trauma-care">Trauma Care</option>
              <option value="arthroscopy">Arthroscopy</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            ></textarea>
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}