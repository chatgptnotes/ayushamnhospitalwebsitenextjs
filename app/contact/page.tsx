import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dr. Murali B.K. - Book an Appointment | Ayushman Nagpur Hospital",
  description: "Contact the best orthopedic surgeon in Nagpur, Dr. Murali B.K., at 7030974619 to book your appointment for joint replacement, spine surgery, or other orthopedic treatments at Ayushman Nagpur Hospital.",
};

export default function ContactPage() {
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
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  Submit Appointment Request
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