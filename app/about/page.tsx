import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Murali B.K. - Best Orthopedic Surgeon in Nagpur | Ayushman Hospital",
  description: "Dr. Murali B.K. is Nagpur's premier orthopedic surgeon with expertise in joint replacement, spine surgery, and sports injuries. Learn about his qualifications and experience.",
};

export default function AboutPage() {
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Murali B.K.",
    "knowsAbout": ["Orthopedic Surgery", "Joint Replacement", "Spine Surgery", "Sports Medicine"],
    "medicalSpecialty": "Orthopedic Surgery",
    "workLocation": {
      "@type": "Hospital",
      "name": "Ayushman Hospital Nagpur",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      }
    },
    "description": "Dr. Murali B.K. is a leading orthopedic surgeon in Nagpur with over 20 years of experience specializing in joint replacement, spine surgery, and sports medicine.",
    "award": [
      "Best Orthopedic Surgeon in Central India (2020)",
      "Excellence in Minimally Invasive Surgery (2018)",
      "Gold Medalist in MS Orthopedics"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "All India Institute of Medical Sciences"
    }
  };

  return (
    <>
      <Script
        id="doctor-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
      <div className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                  <span className="block">Dr. Murali B.K.</span>
                  <span className="block mt-2 text-blue-600 dark:text-blue-400">Nagpur's Leading Orthopedic Surgeon</span>
                </h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                  With over 20 years of experience and thousands of successful surgeries, Dr. Murali B.K. is recognized as the top orthopedic specialist in Nagpur and Central India.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 flex justify-center">
                <div className="h-64 w-64 rounded-full bg-white dark:bg-gray-700 border-4 border-blue-500 dark:border-blue-400 shadow-lg flex items-center justify-center relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full text-blue-600 dark:text-blue-400" viewBox="0 0 100 100" fill="none">
                    {/* Professional background */}
                    <rect x="0" y="0" width="100" height="100" fill="currentColor" fillOpacity="0.05" />
                    
                    {/* Doctor's head */}
                    <circle cx="50" cy="38" r="18" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
                    
                    {/* Doctor's face features - subtle professional look */}
                    <path d="M44 34 A2 2 0 0 1 46 36" stroke="currentColor" strokeWidth="0.7" />
                    <path d="M54 34 A2 2 0 0 0 52 36" stroke="currentColor" strokeWidth="0.7" />
                    <path d="M46 42 A6 4 0 0 0 52 42" stroke="currentColor" strokeWidth="0.7" />
                    
                    {/* Doctor's hair */}
                    <path d="M32 38 Q32 26 50 24 Q68 26 68 38" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
                    
                    {/* Doctor's body/lab coat */}
                    <path d="M30 60 V100 H70 V60" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
                    <path d="M40 60 V100" stroke="currentColor" strokeWidth="0.7" />
                    <path d="M60 60 V100" stroke="currentColor" strokeWidth="0.7" />
                    
                    {/* Doctor's neck */}
                    <path d="M42 56 V60 H58 V56" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.7" />
                    
                    {/* Stethoscope */}
                    <circle cx="35" cy="65" r="3" fill="none" stroke="currentColor" strokeWidth="0.7" />
                    <path d="M35 68 Q30 75 35 80 H45" fill="none" stroke="currentColor" strokeWidth="0.7" />
                    
                    {/* White coat collar */}
                    <path d="M40 60 L50 68 L60 60" fill="none" stroke="currentColor" strokeWidth="0.7" />
                    
                    {/* Professional badge */}
                    <rect x="52" y="68" width="6" height="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.5" />
                    
                    {/* Glasses - adding a professional touch */}
                    <path d="M40 34 Q45 32 50 34 Q55 32 60 34" fill="none" stroke="currentColor" strokeWidth="0.6" />
                  </svg>
                  
                  {/* Name overlay */}
                  <div className="z-10 text-blue-600 dark:text-blue-400 font-bold text-xl">
                    Dr. M.B.K.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Specialized Expertise
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
                Dr. Murali B.K. offers advanced treatment for a wide range of orthopedic conditions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Joint Replacement Surgery
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Specializing in knee and hip replacements using the latest minimally invasive techniques and computer-assisted navigation for precise implant positioning.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Spine Surgery
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Expert in treating complex spine conditions including herniated discs, spinal stenosis, and scoliosis with both surgical and non-surgical approaches.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Sports Medicine
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Providing specialized care for athletes with sports injuries including ACL tears, meniscus injuries, rotator cuff repairs, and rehabilitation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Qualifications & Achievements
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Education & Training</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">MBBS from AIIMS with distinction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">MS Orthopedics (Gold Medalist)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Fellowship in Joint Replacement from UK</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Specialized training in Advanced Spine Surgery from Germany</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Awards & Recognition</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Best Orthopedic Surgeon in Central India (2020)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Excellence in Minimally Invasive Surgery (2018)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Published over 30 research papers in international medical journals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Regular speaker at international orthopedic conferences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Approach */}
        <div className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Experience That Matters</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  With over 20 years of experience and more than 10,000 successful surgeries, Dr. Murali B.K. has established himself as the most trusted orthopedic surgeon in Nagpur. His expertise spans:
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">5000+ joint replacement surgeries</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">2000+ spine surgeries</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">3000+ arthroscopic procedures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Countless trauma surgeries and fracture treatments</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Patient-First Approach</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Dr. Murali B.K. believes in a comprehensive approach to orthopedic care, combining:
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Detailed clinical evaluation and diagnosis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Conservative treatment options whenever possible</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Cutting-edge surgical techniques when surgery is necessary</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Personalized rehabilitation programs for optimal recovery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-blue-600 dark:bg-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Consult with Dr. Murali B.K.
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-blue-100 mx-auto">
              Schedule an appointment with Nagpur's best orthopedic surgeon at Ayushman Hospital
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-medium"
              >
                Book an Appointment
              </Link>
              <Link
                href="/procedures"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Explore Procedures
              </Link>
            </div>
          </div>
        </div>

        {/* Keywords Footer */}
        <div className="py-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center space-x-2">
              <span>best orthopedic surgeon in Nagpur</span>
              <span>•</span>
              <span>top joint replacement doctor</span>
              <span>•</span>
              <span>spine surgeon Nagpur</span>
              <span>•</span>
              <span>Dr. Murali B.K.</span>
              <span>•</span>
              <span>knee replacement Nagpur</span>
              <span>•</span>
              <span>hip replacement specialist</span>
              <span>•</span>
              <span>sports injury doctor</span>
              <span>•</span>
              <span>Ayushman Hospital Nagpur</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 