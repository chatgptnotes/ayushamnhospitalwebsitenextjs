import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Knee Replacement Surgery in Nagpur - Dr. Murali B.K. | Ayushman Hospital",
  description: "Get advanced knee replacement surgery in Nagpur from Dr. Murali B.K., with minimally invasive techniques, computer-assisted precision, and rapid recovery protocols. Call 7030974619 for consultation.",
  keywords: "knee replacement surgery Nagpur, best knee surgeon, total knee replacement, partial knee replacement, knee pain treatment, joint replacement surgery, minimally invasive knee surgery, Dr. Murali B.K.",
  alternates: {
    canonical: "https://www.ayushmannagpurhospital.com/procedures/knee-replacement-surgery"
  },
};

export default function KneeReplacementPage() {
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Knee Replacement Surgery",
    "procedureType": "Orthopedic Surgery",
    "description": "Advanced knee replacement surgery performed by Dr. Murali B.K. at Ayushman Hospital in Nagpur, using minimally invasive techniques and computer-assisted navigation for optimal outcomes.",
    "bodyLocation": "Knee",
    "preparation": "Complete pre-operative assessment, medical clearance, and patient education about the procedure and recovery",
    "followup": "Regular follow-ups, physical therapy, and rehabilitation exercises for 3-6 months",
    "how-performed": "Using minimally invasive techniques, damaged knee joint surfaces are replaced with metal and plastic components designed to mimic natural knee movement",
    "performer": {
      "@type": "Physician",
      "name": "Dr. Murali B.K.",
      "medicalSpecialty": "Orthopedic Surgery",
      "url": "https://www.ayushmannagpurhospital.com/orthopedic-surgeon-nagpur"
    },
    "relevantSpecialty": "Orthopedic Surgery",
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Post-operative Rehabilitation",
      "description": "Comprehensive physiotherapy and rehabilitation program to ensure optimal recovery and function after knee replacement surgery"
    },
    "hospitalAffiliation": {
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
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does recovery from knee replacement surgery take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients can walk with assistance within 1-3 days after surgery. Initial recovery takes 4-6 weeks, with full recovery and return to normal activities in 3-6 months. Dr. Murali B.K.'s minimally invasive techniques at Ayushman Hospital Nagpur typically result in faster recovery times."
        }
      },
      {
        "@type": "Question",
        "name": "Is knee replacement surgery painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modern pain management techniques used by Dr. Murali B.K. at Ayushman Hospital minimize discomfort during and after surgery. Most patients experience significant pain relief from their arthritis immediately after surgery, with surgical pain well-controlled through medication."
        }
      },
      {
        "@type": "Question",
        "name": "How long do knee replacements last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With modern implants and techniques used by Dr. Murali B.K., over 90% of knee replacements last more than 15 years. Some can last 20-25 years or more, depending on the patient's age, activity level, and implant quality."
        }
      },
      {
        "@type": "Question",
        "name": "Am I a candidate for knee replacement surgery in Nagpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You may be a candidate if you have severe knee pain that limits daily activities, pain at rest, chronic inflammation, deformity, or failure to respond to conservative treatments. Dr. Murali B.K. at Ayushman Hospital Nagpur provides thorough evaluations to determine if knee replacement is right for you."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="knee-replacement-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <Script
        id="knee-replacement-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Knee Replacement Surgery in Nagpur
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Expert surgical care by Dr. Murali B.K., the leading orthopedic surgeon in Nagpur
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                What is Knee Replacement Surgery?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Knee replacement surgery, also known as knee arthroplasty, is a surgical procedure to resurface a knee damaged by arthritis or severe injury. During the procedure, the damaged cartilage and bone from the knee joint are removed and replaced with artificial components made of metal alloys, high-grade plastics, and polymers.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Dr. Murali B.K., recognized as the best orthopedic surgeon in Nagpur, performs both total knee replacement (TKR) and partial knee replacement (PKR) surgeries, depending on the patient's condition and requirements.
              </p>
            </div>
          </section>

          {/* Illustration Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Understanding Knee Replacement Surgery
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6 md:flex items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    The Knee Joint Anatomy
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The knee joint is formed by three bones: the femur (thighbone), tibia (shinbone), and patella (kneecap). The ends of these bones are covered with cartilage, a smooth substance that cushions the bones and enables them to move easily.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    In a damaged knee, the cartilage wears away, leading to bone-on-bone contact that causes pain, stiffness, and reduced mobility.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center">
                    <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {/* Stylized knee joint */}
                      <ellipse cx="50" cy="40" rx="25" ry="15" strokeWidth="1.5" />
                      <path d="M30 40 L30 75 Q40 85 50 75 Q60 85 70 75 L70 40" strokeWidth="1.5" />
                      <path d="M40 35 L60 35" strokeWidth="1.5" strokeDasharray="2" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 md:flex items-center">
                <div className="md:w-1/2 flex justify-center order-last md:order-first">
                  <div className="w-64 h-64 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center">
                    <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {/* Stylized knee joint with implant */}
                      <ellipse cx="50" cy="40" rx="25" ry="15" strokeWidth="1.5" />
                      <path d="M30 40 L30 75 Q40 85 50 75 Q60 85 70 75 L70 40" strokeWidth="1.5" />
                      <rect x="35" y="40" width="30" height="20" rx="2" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    The Replacement Procedure
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    During knee replacement surgery, Dr. Murali removes the damaged cartilage and bone and replaces them with metal and plastic implants that recreate the surface of the joint.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    These implants are designed to move like a natural knee, reducing pain and improving function. The procedure typically takes 1-2 hours and requires a hospital stay of 1-3 days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* When Do You Need Surgery */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              When Do You Need Knee Replacement Surgery?
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                You might be a candidate for knee replacement surgery if you experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Severe knee pain that limits everyday activities</li>
                <li>Moderate to severe pain while resting, day or night</li>
                <li>Chronic knee inflammation and swelling that doesn't improve with rest or medications</li>
                <li>Knee deformity — a bowing in or out of your knee</li>
                <li>Failure to respond to conservative treatments like medications, injections, physical therapy, or other surgeries</li>
              </ul>
            </div>
          </section>

          {/* Types of Knee Replacement */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Types of Knee Replacement Surgery in Nagpur
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Total Knee Replacement (TKR)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In a total knee replacement, Dr. Murali replaces the entire knee joint with an artificial prosthesis. This is typically recommended for patients with widespread arthritis affecting multiple compartments of the knee.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  The procedure involves replacing the surfaces of the femur (thigh bone), tibia (shin bone), and patella (kneecap) with specially designed metal and plastic components.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Partial Knee Replacement (PKR)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In a partial knee replacement, only the damaged part of the knee is replaced. This is a less invasive option for patients whose knee damage is limited to a specific compartment.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Dr. Murali specializes in minimally invasive partial knee replacements in Nagpur, which typically result in faster recovery, less pain, and more natural knee movement.
                </p>
              </div>
            </div>
          </section>

          {/* Advanced Techniques */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Advanced Knee Replacement Techniques
            </h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Computer-Assisted Surgery
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dr. Murali B.K. uses advanced computer navigation systems to achieve precision in knee replacement surgeries. This technology allows for accurate alignment of the prosthetic components, which is crucial for the longevity and function of the artificial joint.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Minimally Invasive Techniques
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Using smaller incisions and specialized instruments, Dr. Murali performs minimally invasive knee replacements that result in less tissue damage, reduced pain, and faster recovery compared to traditional open surgery.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Patient-Specific Implants
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                In some cases, Dr. Murali recommends custom-made implants based on the patient's unique anatomy. Using advanced imaging techniques, these implants are designed to match the patient's knee precisely, offering better fit and function.
              </p>
            </div>
          </section>

          {/* Recovery Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Recovery After Knee Replacement Surgery
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">
                Recovery from knee replacement surgery varies from patient to patient, but generally follows this timeline:
              </p>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Immediate Post-Surgery (1-3 days)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You'll typically stay in the hospital for 1-3 days. Pain management, preventing blood clots, and initial physical therapy begin during this period.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Early Recovery (Week 1-3)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You'll begin more intensive physical therapy, learn to use walking aids, and gradually increase your activity level. Most patients can walk with assistance during this phase.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Mid Recovery (Week 4-6)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Many patients can resume light activities and begin to walk without assistance. Continued physical therapy helps improve strength and mobility.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Long-term Recovery (3-6 months)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Most patients return to normal daily activities, including light exercise. The artificial joint continues to strengthen its bond with the surrounding bone.
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                Dr. Murali B.K. and his team at Ayushman Nagpur Hospital provide comprehensive post-operative care, including personalized rehabilitation programs, to ensure optimal recovery and long-term success.
              </p>
            </div>
          </section>

          {/* Success Rates */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Success Rates and Outcomes
            </h2>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Knee replacement surgery has one of the highest success rates among major surgical procedures. Under Dr. Murali's expert care in Nagpur:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>Over 90% of knee replacements last more than 15 years</li>
                <li>Most patients experience significant pain relief and improved mobility</li>
                <li>The majority of patients can return to low-impact activities like walking, swimming, and cycling</li>
                <li>Patient satisfaction rates exceed 95%</li>
              </ul>
              
              <p className="text-gray-700 dark:text-gray-300">
                Dr. Murali's expertise in knee replacement surgery in Nagpur has helped thousands of patients regain mobility and return to an active, pain-free lifestyle.
              </p>
            </div>
          </section>

          {/* Testimonial */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Patient Experiences
            </h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                  "I had been suffering from severe knee pain for years, and it had reached a point where I could barely walk. Dr. Murali recommended a total knee replacement, and it has completely transformed my life. Six months after surgery, I'm walking pain-free and even able to play with my grandchildren. The care I received at Ayushman Hospital in Nagpur was exceptional from start to finish."
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  — Priya Deshmukh, 62, Total Knee Replacement Patient
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-blue-100 dark:bg-blue-900 p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Take the First Step Toward Pain-Free Movement
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                If you're suffering from knee pain and considering knee replacement surgery in Nagpur, consult with Dr. Murali B.K. at Ayushman Hospital for expert evaluation and personalized treatment options.
              </p>
              <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium inline-block"
              >
                Book a Consultation Today
              </Link>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Related Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/orthopedic-surgeon-nagpur"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  About Dr. Murali B.K.
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Learn more about Nagpur's leading orthopedic surgeon
                </p>
              </Link>
              <Link
                href="/procedures/spine-surgery"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  Spine Surgery
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore Dr. Murali's expertise in spine surgery
                </p>
              </Link>
            </div>
          </section>

          {/* Footer with Related Keywords */}
          <footer className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400 space-x-2 text-center">
              <span>knee replacement surgery Nagpur</span>
              <span>•</span>
              <span>total knee replacement</span>
              <span>•</span>
              <span>partial knee replacement</span>
              <span>•</span>
              <span>knee surgery recovery time</span>
              <span>•</span>
              <span>best knee surgeon Nagpur</span>
              <span>•</span>
              <span>arthritis knee treatment</span>
              <span>•</span>
              <span>Dr. Murali knee specialist</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
} 