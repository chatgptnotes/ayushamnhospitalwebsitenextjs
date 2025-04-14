import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Ayushman Nagpur Hospital",
    "url": "https://example.com",
    "logo": "https://example.com/logo.jpg",
    "description": "Ayushman Nagpur Hospital is a premier orthopedic facility founded by Dr. Murali B.K., offering specialized care for bone, joint, and spine conditions.",
    "founder": {
      "@type": "Person",
      "name": "Dr. Murali B.K.",
      "jobTitle": "Orthopedic Surgeon"
    },
    "medicalSpecialty": ["Orthopedic Surgery", "Joint Replacement", "Spine Surgery"],
    "slogan": "Advanced Orthopedic Care for Better Mobility"
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <div className="bg-white dark:bg-gray-900">
        {/* Top Information Strip */}
        <div className="bg-blue-600 dark:bg-blue-800 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center text-white text-sm">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>For appointments: </span>
              <a href="tel:7030974619" className="font-bold hover:underline ml-1">+91 7030974619</a>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-white text-sm">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                  <span className="block">Ayushman Nagpur Hospital</span>
                  <span className="block mt-2 text-blue-600 dark:text-blue-400">Advanced Orthopedic Care</span>
                </h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                  Founded by Dr. Murali B.K., Ayushman Hospital is Nagpur's premier orthopedic facility, dedicated to restoring your mobility and improving your quality of life.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-center"
                  >
                    Book an Appointment
                  </Link>
                  <Link
                    href="/orthopedic-surgeon-nagpur"
                    className="px-8 py-4 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300 font-medium text-center"
                  >
                    Meet Dr. Murali B.K.
                  </Link>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 flex justify-center">
                <div className="h-64 w-full lg:h-96 rounded-xl overflow-hidden shadow-xl bg-blue-50 dark:bg-gray-800">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="p-8 text-center">
                      <svg className="w-16 h-16 mx-auto text-blue-600 dark:text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ayushman Nagpur Hospital</h3>
                      <p className="text-gray-600 dark:text-gray-300">Modern Orthopedic Care Facility</p>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">Leading the way in advanced orthopedic treatments in Nagpur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 sm:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Our Specialized Services
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
                Comprehensive orthopedic care using the latest techniques and technology
              </p>
            </div>
            
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Joint Replacement",
                  description: "State-of-the-art knee, hip, and shoulder replacement surgeries with minimal recovery time.",
                  link: "/procedures/knee-replacement-surgery"
                },
                {
                  title: "Spine Surgery",
                  description: "Advanced treatments for herniated discs, spinal stenosis, and other spine conditions.",
                  link: "/procedures/spine-surgery"
                },
                {
                  title: "Sports Injuries",
                  description: "Specialized care for athletes with ACL repairs, meniscus treatments, and rehabilitation.",
                  link: "/blog/acl-injuries"
                },
                {
                  title: "Trauma Care",
                  description: "Emergency and planned treatments for fractures and other orthopedic injuries.",
                  link: "/procedures"
                },
                {
                  title: "Arthroscopy",
                  description: "Minimally invasive procedures for joint diagnosis and treatment.",
                  link: "/procedures"
                },
                {
                  title: "Physiotherapy",
                  description: "Comprehensive rehabilitation services to ensure optimal recovery.",
                  link: "/procedures"
                }
              ].map((service, index) => (
                <div key={index} className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Why Choose Ayushman Hospital
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
                Committed to excellence in orthopedic care and patient satisfaction
              </p>
            </div>
            
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Expert Team",
                  description: "Led by Dr. Murali B.K., our team of skilled surgeons, physicians, and therapists provide world-class orthopedic care."
                },
                {
                  title: "Advanced Technology",
                  description: "State-of-the-art diagnostic and surgical equipment to ensure precise diagnosis and effective treatment."
                },
                {
                  title: "Patient-Centered Care",
                  description: "Personalized treatment plans tailored to each patient's unique needs and recovery goals."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 sm:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                What Our Patients Say
              </h2>
            </div>
            
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Rahul Sharma",
                  testimonial: "After my knee replacement surgery with Dr. Murali, I'm finally able to walk without pain. The care at Ayushman Hospital was exceptional."
                },
                {
                  name: "Priya Deshmukh",
                  testimonial: "The spine surgery performed by Dr. Murali completely transformed my life. I'm now pain-free after years of suffering."
                },
                {
                  name: "Vijay Mehta",
                  testimonial: "The staff at Ayushman Hospital made my recovery so much easier. Their attention to detail and compassionate care is unmatched in Nagpur."
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8"
                >
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.testimonial}"</p>
                  <p className="font-bold text-gray-900 dark:text-white">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 sm:py-24 bg-blue-600 dark:bg-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Take the First Step?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-blue-100 mx-auto">
              Schedule a consultation with Dr. Murali B.K. at Ayushman Nagpur Hospital
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-medium inline-block"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}
