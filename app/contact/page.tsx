"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate required fields
      if (!formData.name.trim()) {
        throw new Error('Name is required');
      }
      if (!formData.phone.trim()) {
        throw new Error('Phone number is required');
      }

      // Format phone number
      const formattedPhone = formData.phone.replace(/[\s-]/g, '');

      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: formattedPhone,
          timestamp: new Date().toISOString(),
          status: 'pending'
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to submit appointment');
      }

      setFormData({
        name: '',
        phone: '',
        email: '',
        treatment: '',
        message: '',
      });
      setSuccess(true);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError(err.message || 'There was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Contact Dr. Murali B.K.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Fill out the form below to book an appointment with the best orthopedic surgeon in Nagpur.
            Our team will get back to you within 24 hours to confirm your appointment.
            For immediate assistance, call us at <span className="font-bold">7030974619</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Book an Appointment
            </h2>
            {error && (
              <div className="mb-4 p-4 rounded-md bg-red-50 text-red-800 border border-red-200">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-4 rounded-md bg-green-50 text-green-800 border border-green-200">
                Appointment request submitted successfully! We will contact you shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Ayushman Nagpur Hospital
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  3rd floor, Shrivardhan Complex,<br />
                  next to Big Bazaar, Lokmat Square,<br />
                  Ramdaspeth, Nagpur,<br />
                  Maharashtra 440012<br />
                  India
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="tel:7030974619" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +91 7030974619
                  </a> (Direct Line)<br />
                  <a href="tel:18002330000" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    1800-233-0000
                  </a> (Appointments)<br />
                  <a href="tel:9373111709" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +91 9373111709
                  </a> (Emergency)
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="mailto:ayushmanhos@gmail.com" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    ayushmanhos@gmail.com
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Working Hours
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Monday to Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: 10:00 AM - 2:00 PM (Emergency only)
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Emergency Care
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For orthopedic emergencies, please call our 24/7 emergency line at <a href="tel:9373111709" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+91 9373111709</a> or visit the emergency department at Ayushman Nagpur Hospital.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400 space-x-2 text-center">
            <span>orthopedic surgeon appointment Nagpur</span>
            <span>•</span>
            <span>Dr. Murali B.K. contact 7030974619</span>
            <span>•</span>
            <span>book orthopedic consultation Nagpur</span>
            <span>•</span>
            <span>joint replacement appointment</span>
            <span>•</span>
            <span>spine surgery consultation Nagpur</span>
          </div>
        </footer>
      </div>
    </div>
  );
} 