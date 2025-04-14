import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sciatica: When Back Pain Radiates Down Your Leg | Dr. Murali B.K.",
  description: "Learn about sciatica causes, symptoms, and treatment options from Dr. Murali B.K., Nagpur's leading orthopedic surgeon specializing in spine conditions.",
};

export default function SciaticaBlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "about": {
      "@type": "MedicalCondition",
      "name": "Sciatica",
      "alternateName": "Sciatic nerve pain",
      "description": "Pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg.",
      "code": {
        "@type": "MedicalCode",
        "code": "M54.3",
        "codingSystem": "ICD-10"
      },
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Sciatic nerve"
      },
      "possibleTreatment": [
        "Rest and activity modification",
        "Pain medications",
        "Physical therapy",
        "Epidural steroid injections",
        "Surgery (in severe cases)"
      ],
      "primaryPrevention": [
        "Exercise regularly",
        "Maintain good posture",
        "Practice proper body mechanics"
      ]
    },
    "headline": "Sciatica: When Back Pain Radiates Down Your Leg",
    "image": "https://example.com/images/sciatica.jpg",
    "datePublished": "2023-08-18",
    "dateModified": "2023-08-18",
    "author": {
      "@type": "Person",
      "name": "Dr. Murali B.K.",
      "jobTitle": "Orthopedic Surgeon"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ayushman Hospital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/logo.jpg"
      }
    },
    "specialty": "Orthopedic Surgery",
    "audience": "Patient"
  };

  return (
    <>
      <Script
        id="sciatica-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Blog Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
                Blog
              </Link>
              <span>•</span>
              <Link href="/blog?category=spine" className="hover:text-blue-600 dark:hover:text-blue-400">
                Spine Conditions
              </Link>
              <span>•</span>
              <span>August 18, 2023</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Sciatica: When Back Pain Radiates Down Your Leg
            </h1>
            
            <div className="flex items-center mb-8">
              <div className="h-12 w-12 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
                MB
              </div>
              <div className="ml-4">
                <p className="text-md font-medium text-gray-900 dark:text-white">Dr. Murali B.K.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Orthopedic Surgeon • 5 min read</p>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              Sciatica refers to pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg. Typically, sciatica affects only one side of your body and can range from a mild ache to excruciating pain that significantly impacts your quality of life.
            </p>
            
            <h2>Understanding the Sciatic Nerve</h2>
            
            <p>
              The sciatic nerve is the largest nerve in the human body, starting in the lower back and running through the buttock and down the lower limb. It provides sensation to the thighs, legs, and the soles of the feet and controls many of the muscles in the lower limbs.
            </p>
            
            <p>
              When this nerve becomes compressed or irritated, it can cause pain, inflammation, and numbness in the affected leg. This condition is what we call sciatica.
            </p>
            
            <h2>Common Causes of Sciatica</h2>
            
            <p>
              Sciatica is not a condition itself but a symptom of an underlying problem. The most common causes include:
            </p>
            
            <ul>
              <li>
                <strong>Herniated or Slipped Disc:</strong> When the soft inner material of a spinal disc bulges through the tougher exterior, it can press on the sciatic nerve roots.
              </li>
              <li>
                <strong>Spinal Stenosis:</strong> A narrowing of the spinal canal in the lower back that puts pressure on the nerves.
              </li>
              <li>
                <strong>Degenerative Disc Disease:</strong> Age-related changes in the spine can lead to disc degeneration, which may put pressure on the sciatic nerve.
              </li>
              <li>
                <strong>Spondylolisthesis:</strong> A condition where one vertebra slips forward over another, potentially pinching the nerve.
              </li>
              <li>
                <strong>Piriformis Syndrome:</strong> The piriformis muscle in the buttock can sometimes irritate or compress the sciatic nerve.
              </li>
              <li>
                <strong>Trauma:</strong> An injury to the spine, such as a fracture, can damage the sciatic nerve or surrounding tissues.
              </li>
              <li>
                <strong>Tumors:</strong> Rarely, tumors can grow along the spinal cord and compress nerves.
              </li>
            </ul>
            
            <h2>Recognizing Sciatica Symptoms</h2>
            
            <p>
              The hallmark symptom of sciatica is pain that follows the path of the sciatic nerve. However, the condition can manifest in various ways:
            </p>
            
            <ul>
              <li>
                <strong>Lower back pain:</strong> Often starts in the lower back and extends down the buttock and leg.
              </li>
              <li>
                <strong>Radiating pain:</strong> Pain that radiates from the lower spine to the buttock and down the back of the leg, sometimes reaching the foot.
              </li>
              <li>
                <strong>Numbness or tingling:</strong> Parts of the leg may feel numb, tingly, or weak.
              </li>
              <li>
                <strong>Sharp or burning pain:</strong> The pain can be described as sharp, burning, or electric-like.
              </li>
              <li>
                <strong>One-sided symptoms:</strong> Sciatica typically affects only one side of the body.
              </li>
              <li>
                <strong>Worsening with certain positions:</strong> The pain may increase when sitting, standing for long periods, coughing, sneezing, or twisting.
              </li>
              <li>
                <strong>Difficulty moving:</strong> Some people experience difficulty moving the affected leg or foot.
              </li>
            </ul>
            
            <h2>Diagnosis of Sciatica</h2>
            
            <p>
              If you're experiencing symptoms that suggest sciatica, Dr. Murali will perform a comprehensive evaluation that may include:
            </p>
            
            <ul>
              <li>
                <strong>Physical examination:</strong> Testing reflexes, muscle strength, and sensation in your legs and feet.
              </li>
              <li>
                <strong>Straight leg raise test:</strong> A specific test to help determine if a herniated disc is causing your sciatica.
              </li>
              <li>
                <strong>Imaging tests:</strong> X-rays, MRI, or CT scans to visualize the spine and potentially identify the cause of sciatica.
              </li>
              <li>
                <strong>Electromyography (EMG):</strong> In some cases, this test may be used to evaluate nerve function and help determine the location of nerve damage.
              </li>
            </ul>
            
            <h2>Treatment Options for Sciatica</h2>
            
            <p>
              The good news is that most cases of sciatica resolve with non-surgical treatments. The treatment approach depends on the underlying cause and the severity of symptoms.
            </p>
            
            <h3>Conservative (Non-Surgical) Treatments</h3>
            
            <ol>
              <li>
                <strong>Rest and activity modification:</strong> Initially, taking a break from activities that worsen pain can help reduce inflammation.
              </li>
              <li>
                <strong>Pain medications:</strong> Over-the-counter pain relievers like ibuprofen or naproxen can help reduce inflammation and pain.
              </li>
              <li>
                <strong>Physical therapy:</strong> Specific exercises to strengthen the back and core muscles, improve flexibility, and correct posture.
              </li>
              <li>
                <strong>Hot and cold therapy:</strong> Alternating heat and ice can help reduce inflammation and alleviate pain.
              </li>
              <li>
                <strong>Epidural steroid injections:</strong> These injections deliver anti-inflammatory medication directly to the area around the affected nerve roots.
              </li>
            </ol>
            
            <h3>Surgical Treatments</h3>
            
            <p>
              If conservative treatments don't provide relief after several weeks, or if the pain is severe or causing significant weakness, surgery might be considered:
            </p>
            
            <ol>
              <li>
                <strong>Microdiscectomy:</strong> A minimally invasive procedure to remove the portion of a herniated disc that's pressing on the sciatic nerve.
              </li>
              <li>
                <strong>Laminectomy:</strong> Surgery to remove a portion of the vertebral bone called the lamina to create more space for the nerves.
              </li>
              <li>
                <strong>Spinal fusion:</strong> In rare cases, connecting two or more vertebrae permanently might be necessary to provide stability.
              </li>
            </ol>
            
            <p>
              At Ayushman Hospital in Nagpur, Dr. Murali specializes in minimally invasive spine surgery techniques that result in smaller incisions, less pain, and faster recovery compared to traditional open surgery.
            </p>
            
            <h2>Prevention and Self-Care for Sciatica</h2>
            
            <p>
              While not all cases of sciatica can be prevented, certain practices can reduce your risk and help manage the condition:
            </p>
            
            <ul>
              <li>
                <strong>Exercise regularly:</strong> Focus on core-strengthening exercises to support your spine.
              </li>
              <li>
                <strong>Maintain good posture:</strong> Be mindful of your posture when sitting, standing, and lifting.
              </li>
              <li>
                <strong>Practice proper body mechanics:</strong> Bend at your knees, not your waist, when lifting heavy objects.
              </li>
              <li>
                <strong>Take breaks from sitting:</strong> If you have a desk job, stand up and move around regularly.
              </li>
              <li>
                <strong>Use ergonomic furniture:</strong> Choose chairs with good lower back support and proper height.
              </li>
              <li>
                <strong>Maintain a healthy weight:</strong> Excess weight puts added stress on your spine.
              </li>
              <li>
                <strong>Quit smoking:</strong> Smoking can increase the risk of back pain and sciatica by reducing blood flow to the spine.
              </li>
            </ul>
            
            <h2>When to See a Doctor</h2>
            
            <p>
              While mild sciatica often resolves on its own, you should consult a healthcare professional if you experience:
            </p>
            
            <ul>
              <li>Severe pain that doesn't improve with rest or over-the-counter pain medications</li>
              <li>Pain following a sudden injury, such as a car accident or fall</li>
              <li>Difficulty controlling your bowels or bladder</li>
              <li>Progressive weakness or numbness in your leg</li>
              <li>Pain that worsens at night or when lying down</li>
            </ul>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Expert Sciatica Treatment in Nagpur
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Dr. Murali B.K. at Ayushman Hospital offers comprehensive evaluation and personalized treatment plans for patients suffering from sciatica. With his expertise in spine conditions, he can help you find relief from sciatic pain and return to your normal activities.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Schedule a Consultation
              </Link>
            </div>
          </article>
          
          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Related Articles
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Link 
                href="/blog/osteoarthritis"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  Understanding Osteoarthritis: Causes, Symptoms, and Treatments
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Learn about the most common form of arthritis and how to manage it
                </p>
              </Link>
              
              <Link 
                href="/procedures/spine-surgery"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  Spine Surgery in Nagpur
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Advanced surgical treatments for various spine conditions by Dr. Murali B.K.
                </p>
              </Link>
            </div>
          </section>
          
          {/* Comments Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Comments (2)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">
                    PK
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium text-gray-900 dark:text-white">Prakash Kumar</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">3 days ago</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      I've been suffering from sciatica for the past 6 months. The exercises mentioned here have helped me a lot. Planning to consult with Dr. Murali soon for a proper diagnosis.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">
                    SJ
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium text-gray-900 dark:text-white">Sanjay Joshi</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">1 week ago</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Dr. Murali treated my sciatica with minimally invasive surgery last year after conservative treatments failed. I'm now completely pain-free and can enjoy my daily activities again. Highly recommend consulting him if you're suffering from sciatica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Add Comment Form */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Leave a Comment
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Comment
                  </label>
                  <textarea 
                    id="comment"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 