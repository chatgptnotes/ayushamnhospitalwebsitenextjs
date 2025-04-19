import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Orthopedic Surgeon in Nagpur - Dr. Murali B.K. | Ayushman Hospital",
  description: "Looking for the best orthopedic surgeon in Nagpur? Dr. Murali B.K. offers expert knee replacement, hip replacement, spine surgery & sports injury treatment with 15+ years experience. Book an appointment today: 7030974619.",
  keywords: "best orthopedic surgeon Nagpur, Dr. Murali B.K., knee replacement surgeon, hip replacement Nagpur, spine surgery specialist, sports injury doctor, joint replacement expert, top orthopedic doctor",
  alternates: {
    canonical: "https://www.ayushmannagpurhospital.com/orthopedic-surgeon-nagpur"
  },
};

export default function OrthopedicSurgeonPage() {
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Murali B.K.",
    "image": "https://www.ayushmannagpurhospital.com/dr-murali.jpg",
    "medicalSpecialty": ["Orthopedic Surgery", "Joint Replacement", "Spine Surgery", "Sports Medicine"],
    "knowsAbout": [
      "Knee Replacement Surgery", 
      "Hip Replacement Surgery", 
      "Arthroscopic Surgery", 
      "Spine Surgery", 
      "Sports Injuries", 
      "Trauma Care"
    ],
    "description": "Dr. Murali B.K. is the best orthopedic surgeon in Nagpur with over 15 years of experience and 5000+ successful surgeries.",
    "telephone": "+91-7030974619",
    "email": "ayushmanhos@gmail.com",
    "url": "https://www.ayushmannagpurhospital.com/orthopedic-surgeon-nagpur",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd floor, Shrivardhan Complex, next to Big Bazaar, Lokmat Square",
      "addressLocality": "Ramdaspeth, Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440012",
      "addressCountry": "IN"
    },
    "workLocation": {
      "@type": "Hospital",
      "name": "Ayushman Hospital Nagpur",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3rd floor, Shrivardhan Complex, next to Big Bazaar, Lokmat Square",
        "addressLocality": "Ramdaspeth, Nagpur",
        "addressRegion": "Maharashtra",
        "postalCode": "440012",
        "addressCountry": "IN"
      }
    },
    "availableService": [
      "Knee Replacement Surgery",
      "Hip Replacement Surgery",
      "Spine Surgery",
      "Sports Injury Treatment",
      "Arthroscopic Surgery",
      "Trauma Care"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Indian Orthopedic Association"
      },
      {
        "@type": "Organization",
        "name": "International Society of Orthopedic Surgery and Traumatology"
      }
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          {/* Doctor Profile Section */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 p-8 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-white dark:bg-gray-600 border-4 border-blue-500 dark:border-blue-400 flex items-center justify-center relative overflow-hidden shadow-inner">
  {/* Image of Dr. Murali */}
  <img 
    src="https://drmurali.ai/docImg/Murali.jpg" 
    alt="Dr. Murali" 
    className="absolute inset-0 w-full h-full object-cover"
  />
 
</div>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dr. Murali B.K., MBBS, MS (Ortho)</h2>
                <p className="text-blue-600 dark:text-blue-400 text-lg mb-4">Senior Orthopedic Surgeon & Joint Replacement Specialist</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Joint Replacement</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Spine Surgery</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Sports Medicine</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Trauma Care</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-300"><strong>Experience:</strong> 15+ Years</p>
                    <p className="text-gray-600 dark:text-gray-300"><strong>Surgeries:</strong> 5000+</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300"><strong>Languages:</strong> English, Hindi, Marathi</p>
                    <p className="text-gray-600 dark:text-gray-300"><strong>Consultation:</strong> Mon-Sat, 9AM-7PM</p>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
                    Book Appointment
                  </Link>
                  <a href="tel:7030974619" className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300 font-medium">
                    Call Now: 7030974619
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Best Orthopedic Surgeon in Nagpur - Trusted Care by Dr. Murali B.K.
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                If you're looking for the best orthopedic surgeon in Nagpur, look no further than Dr. Murali B.K., the leading specialist in joint replacement, spine surgery, and trauma care. With over 15 years of experience in providing expert orthopedic care, Dr. Murali has successfully treated thousands of patients from Nagpur and beyond. His compassionate approach, combined with advanced surgical techniques, makes him one of the most trusted orthopedic surgeons in the region.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                At Ayushman Nagpur Hospital, Dr. Murali specializes in providing tailored treatment for various orthopedic conditions, including arthritis, spinal issues, fractures, and sports injuries. His expertise in using cutting-edge technology for joint replacement surgeries and minimally invasive spine procedures sets him apart.
              </p>
            </div>
          </div>

          {/* Why Choose Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Why Choose Dr. Murali B.K.?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Experience and Expertise
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  With over 15 years of experience in orthopedic surgery, Dr. Murali has built a reputation as the best orthopedic surgeon in Nagpur. His expertise covers a wide range of treatments, from complex joint replacement surgeries to advanced spine surgeries, ensuring optimal outcomes for his patients.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Advanced Technology & Techniques
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dr. Murali B.K. stays ahead of the curve by adopting the latest technology in orthopedic care. He uses robotic-assisted surgeries, 3D imaging for precision, and minimally invasive techniques, which lead to faster recovery times and fewer complications.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Personalized Care
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dr. Murali believes in a personalized approach to treatment, ensuring that each patient receives care tailored to their specific condition and needs. Whether it's a routine consultation or a complex surgery, Dr. Murali takes the time to understand each patient's unique situation.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Our Services
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Joint Replacement Surgery
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dr. Murali B.K. is renowned for his expertise in joint replacement surgeries. Whether you need knee, hip, or shoulder replacement surgery, Dr. Murali ensures the use of the latest techniques and materials to provide a long-lasting solution.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Spine Surgery
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  From herniated discs to scoliosis, Dr. Murali specializes in treating various spine-related conditions using advanced surgical procedures, ensuring minimal pain and quick recovery.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Sports Injury Management
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  As a specialist in sports medicine, Dr. Murali helps athletes recover from injuries such as ligament tears, fractures, and tendon injuries. His approach focuses on both surgical and non-surgical solutions.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Trauma Care and Emergency Orthopedics
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  In addition to scheduled surgeries, Dr. Murali also offers emergency orthopedic care for trauma patients, ensuring that fractures, dislocations, and other urgent injuries are treated quickly and effectively.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Arthroscopy
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Minimally invasive arthroscopic surgeries for knee, shoulder, and hip issues provide faster recovery times and less pain, a specialty of Dr. Murali B.K.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Patient Testimonials
            </h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Real Stories from Patients in Nagpur
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Read what our patients have to say about their experience with Dr. Murali B.K. and the team at Ayushman Nagpur Hospital. Hear how our treatments have changed their lives for the better.
              </p>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <p className="italic text-gray-600 dark:text-gray-300 mb-2">
                  "Dr. Murali is the best orthopedic surgeon in Nagpur! My knee replacement surgery was a success, and I was walking within weeks. The care I received was top-notch, and I highly recommend him to anyone in need of orthopedic treatment."
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  Rajesh Sharma, Age: 50, Knee Replacement Surgery
                </p>
              </div>
            </div>
          </section>

          {/* Book Appointment Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Book Your Consultation with the Best Orthopedic Surgeon in Nagpur
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Ready to take the next step toward a pain-free life? Contact us today to book an appointment with Dr. Murali B.K. at Ayushman Nagpur Hospital. Our team is here to guide you through every step of the treatment process.
            </p>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Contact Information:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Call now at <span className="font-medium">+91 9876543210</span> or fill out the form below to schedule your appointment.
              </p>
            </div>
            
            <div className="text-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium text-lg"
              >
                Contact Us Today for a Consultation
              </Link>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Don't wait any longer to receive expert orthopedic care. Book your consultation today and experience the best orthopedic care in Nagpur.
              </p>
            </div>
          </section>

          {/* Footer with Related Keywords */}
          <footer className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400 space-x-2 text-center">
              <span>best orthopedic surgeon Nagpur</span>
              <span>•</span>
              <span>joint replacement surgery Nagpur</span>
              <span>•</span>
              <span>spine surgery Nagpur</span>
              <span>•</span>
              <span>sports injury treatment Nagpur</span>
              <span>•</span>
              <span>orthopedic care Nagpur</span>
              <span>•</span>
              <span>Dr. Murali B.K. orthopedic surgeon</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
} 
