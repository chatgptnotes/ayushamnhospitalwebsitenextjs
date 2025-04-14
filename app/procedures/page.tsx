import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orthopedic Procedures in Nagpur - Dr. Murali B.K. | Ayushman Hospital",
  description: "Explore the range of orthopedic procedures performed by Dr. Murali B.K. in Nagpur including joint replacement, spine surgery, sports injury treatment, and more.",
};

export default function ProceduresPage() {
  const procedures = [
    {
      id: "knee-replacement-surgery",
      title: "Knee Replacement Surgery",
      description: "Total and partial knee replacement surgery to treat severe arthritis and knee injuries, providing pain relief and improved mobility.",
      icon: (
        <svg className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
    },
    {
      id: "spine-surgery",
      title: "Spine Surgery",
      description: "Advanced spine surgeries including microdiscectomy, laminectomy, spinal fusion, and minimally invasive procedures for various spine conditions.",
      icon: (
        <svg className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: "hip-replacement",
      title: "Hip Replacement",
      description: "Total and partial hip replacement procedures using the latest techniques and implants for patients with hip arthritis or fractures.",
      icon: (
        <svg className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "arthroscopy",
      title: "Arthroscopic Surgery",
      description: "Minimally invasive joint procedures using tiny cameras and specialized instruments to diagnose and treat various joint conditions.",
      icon: (
        <svg className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "sports-injury-treatment",
      title: "Sports Injury Treatment",
      description: "Specialized care for athletes and active individuals with sports-related injuries, including ACL reconstruction, meniscus repair, and more.",
      icon: (
        <svg className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "trauma-care",
      title: "Trauma Care",
      description: "Emergency and planned treatments for fractures, dislocations, and other orthopedic injuries requiring surgical intervention.",
      icon: (
        <svg className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Orthopedic Procedures in Nagpur
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced surgical and non-surgical treatments by Dr. Murali B.K., Nagpur's leading orthopedic surgeon
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Comprehensive Orthopedic Care
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Dr. Murali B.K. offers a wide range of orthopedic treatments and procedures at Ayushman Hospital in Nagpur. With his expertise spanning joint replacement, spine surgery, sports medicine, and trauma care, Dr. Murali provides tailored solutions for patients with various musculoskeletal conditions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Using the latest techniques and technology, Dr. Murali focuses on minimally invasive approaches whenever possible, resulting in less pain, faster recovery, and better outcomes for his patients.
            </p>
          </div>
        </section>

        {/* Procedures Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Our Specialized Procedures
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((procedure) => (
              <div 
                key={procedure.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-50 dark:bg-gray-700 p-6 flex items-center justify-center">
                  {procedure.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {procedure.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {procedure.description}
                  </p>
                  <Link
                    href={`/procedures/${procedure.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Why Choose Dr. Murali for Your Orthopedic Care?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Expertise & Experience
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                With over 15 years of experience, Dr. Murali has successfully treated thousands of patients with various orthopedic conditions. His expertise covers the full spectrum of orthopedic procedures.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Cutting-Edge Techniques
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dr. Murali stays at the forefront of orthopedic advancements, offering minimally invasive procedures, computer-assisted surgery, and the latest implant technologies.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Comprehensive Care
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                From initial consultation through surgery and rehabilitation, Dr. Murali provides continuous support and personalized care to ensure optimal outcomes for every patient.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-blue-100 dark:bg-blue-900 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Take the First Step Towards a Pain-Free Life
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Contact Dr. Murali B.K. at Ayushman Hospital in Nagpur for a consultation and discover the right treatment option for your orthopedic condition.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium inline-block"
            >
              Book a Consultation
            </Link>
          </div>
        </section>

        {/* Footer with Related Keywords */}
        <footer className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400 space-x-2 text-center">
            <span>orthopedic procedures Nagpur</span>
            <span>•</span>
            <span>joint replacement surgery</span>
            <span>•</span>
            <span>spine surgery Nagpur</span>
            <span>•</span>
            <span>knee surgery</span>
            <span>•</span>
            <span>hip replacement Nagpur</span>
            <span>•</span>
            <span>sports injury treatment</span>
            <span>•</span>
            <span>Dr. Murali B.K. orthopedic surgeon</span>
          </div>
        </footer>
      </div>
    </div>
  );
} 