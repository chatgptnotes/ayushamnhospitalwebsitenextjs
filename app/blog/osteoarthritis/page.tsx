import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Understanding Osteoarthritis: Causes, Symptoms, and Treatments | Dr. Murali B.K.",
  description: "Learn about osteoarthritis causes, symptoms, and treatment options from Dr. Murali B.K., Nagpur's leading orthopedic surgeon specializing in joint conditions.",
};

export default function OsteoarthritisBlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "about": {
      "@type": "MedicalCondition",
      "name": "Osteoarthritis",
      "alternateName": "Degenerative joint disease",
      "description": "A degenerative joint disease that occurs when the protective cartilage that cushions the ends of bones wears down over time.",
      "code": {
        "@type": "MedicalCode",
        "code": "M15-M19",
        "codingSystem": "ICD-10"
      },
      "possibleTreatment": [
        "Physical therapy",
        "Medications",
        "Injections",
        "Joint replacement surgery"
      ],
      "primaryPrevention": [
        "Exercise regularly",
        "Maintain a healthy weight",
        "Avoid joint injuries"
      ]
    },
    "headline": "Understanding Osteoarthritis: Causes, Symptoms, and Treatments",
    "image": "https://example.com/images/osteoarthritis.jpg",
    "datePublished": "2023-10-15",
    "dateModified": "2023-10-15",
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
        id="osteoarthritis-schema"
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
              <Link href="/blog?category=joint" className="hover:text-blue-600 dark:hover:text-blue-400">
                Joint Conditions
              </Link>
              <span>•</span>
              <span>October 15, 2023</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Understanding Osteoarthritis: Causes, Symptoms, and Treatments
            </h1>
            
            <div className="flex items-center mb-8">
              <div className="h-12 w-12 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
                MB
              </div>
              <div className="ml-4">
                <p className="text-md font-medium text-gray-900 dark:text-white">Dr. Murali B.K.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Orthopedic Surgeon • 6 min read</p>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              Osteoarthritis (OA) is the most common form of arthritis, affecting millions of people worldwide. It's a degenerative joint disease that occurs when the protective cartilage that cushions the ends of your bones wears down over time. While osteoarthritis can damage any joint, it most commonly affects joints in your hands, knees, hips, and spine.
            </p>
            
            <h2>What Causes Osteoarthritis?</h2>
            
            <p>
              Osteoarthritis occurs when the cartilage that cushions the ends of bones in your joints gradually deteriorates. Cartilage is a firm, slippery tissue that enables nearly frictionless joint motion. In osteoarthritis, the slick surface of the cartilage becomes rough. Eventually, if the cartilage wears down completely, you may be left with bone rubbing on bone, causing pain, stiffness, and reduced mobility.
            </p>
            
            <p>
              Several factors can contribute to the development of osteoarthritis:
            </p>
            
            <ul>
              <li>
                <strong>Age:</strong> The risk of osteoarthritis increases with age, with most people showing some signs of wear and tear in their joints by middle age.
              </li>
              <li>
                <strong>Gender:</strong> Women are more likely to develop osteoarthritis than men, especially after age 50.
              </li>
              <li>
                <strong>Obesity:</strong> Excess weight puts additional stress on weight-bearing joints, such as your knees and hips, accelerating the breakdown of cartilage.
              </li>
              <li>
                <strong>Joint injuries:</strong> Injuries, such as those that occur when playing sports or from an accident, may increase the risk of osteoarthritis in the affected joint.
              </li>
              <li>
                <strong>Repetitive stress:</strong> Jobs or activities that place repetitive stress on a particular joint can lead to osteoarthritis in that joint.
              </li>
              <li>
                <strong>Genetics:</strong> Some people inherit a tendency to develop osteoarthritis.
              </li>
              <li>
                <strong>Bone deformities:</strong> Some people are born with malformed joints or defective cartilage, which increases their risk.
              </li>
              <li>
                <strong>Certain metabolic diseases:</strong> Diabetes and other metabolic disorders can accelerate the breakdown of cartilage.
              </li>
            </ul>
            
            <h2>Recognizing the Symptoms of Osteoarthritis</h2>
            
            <p>
              Osteoarthritis symptoms often develop slowly and worsen over time. Signs and symptoms of osteoarthritis include:
            </p>
            
            <ul>
              <li>
                <strong>Pain:</strong> Affected joints may hurt during or after movement.
              </li>
              <li>
                <strong>Stiffness:</strong> Joint stiffness is most noticeable upon awakening or after a period of inactivity.
              </li>
              <li>
                <strong>Tenderness:</strong> Your joint may feel tender when you apply light pressure to or near it.
              </li>
              <li>
                <strong>Loss of flexibility:</strong> You may not be able to move your joint through its full range of motion.
              </li>
              <li>
                <strong>Grating sensation:</strong> You might hear or feel a grating sensation when you use the joint.
              </li>
              <li>
                <strong>Bone spurs:</strong> These extra bits of bone can form around the affected joint, feeling like hard lumps.
              </li>
              <li>
                <strong>Swelling:</strong> Inflammation of the soft tissues around the joint may cause swelling.
              </li>
            </ul>
            
            <h2>Diagnosis of Osteoarthritis</h2>
            
            <p>
              During physical examination, your doctor will check the affected joint for:
            </p>
            
            <ul>
              <li>Tenderness</li>
              <li>Swelling</li>
              <li>Redness</li>
              <li>Flexibility</li>
              <li>Range of motion</li>
            </ul>
            
            <p>
              Diagnostic tests that help confirm osteoarthritis include:
            </p>
            
            <ul>
              <li>
                <strong>X-rays:</strong> Cartilage doesn't show up on X-ray images, but cartilage loss is revealed by a narrowing of the space between the bones in your joint. X-rays may also show bone spurs around a joint.
              </li>
              <li>
                <strong>MRI:</strong> This imaging test uses radio waves and a strong magnetic field to produce detailed images of bone and soft tissues, including cartilage. An MRI isn't commonly needed to diagnose osteoarthritis but may help provide more information in complex cases.
              </li>
              <li>
                <strong>Blood tests:</strong> While there's no blood test for osteoarthritis, certain tests can help rule out other causes of joint pain, such as rheumatoid arthritis.
              </li>
              <li>
                <strong>Joint fluid analysis:</strong> Your doctor might use a needle to draw fluid from an affected joint, which is then examined for inflammation and to determine whether your pain is caused by gout or an infection rather than osteoarthritis.
              </li>
            </ul>
            
            <h2>Treatment Options for Osteoarthritis</h2>
            
            <p>
              While there's no cure for osteoarthritis, treatments can help reduce pain and maintain joint movement. Treatment options include:
            </p>
            
            <h3>Non-Surgical Treatments</h3>
            
            <ol>
              <li>
                <strong>Medications:</strong>
                <ul>
                  <li>Pain relievers such as acetaminophen (Tylenol) can help alleviate pain.</li>
                  <li>Nonsteroidal anti-inflammatory drugs (NSAIDs) like ibuprofen (Advil, Motrin) and naproxen sodium (Aleve) can reduce both pain and inflammation.</li>
                  <li>Duloxetine (Cymbalta), a medication for depression, is also approved to treat chronic musculoskeletal pain, including osteoarthritis pain.</li>
                </ul>
              </li>
              <li>
                <strong>Physical therapy:</strong> A physical therapist can help you develop an exercise program that strengthens the muscles around your joint, increasing flexibility and reducing pain.
              </li>
              <li>
                <strong>Occupational therapy:</strong> An occupational therapist can help you discover ways to do everyday tasks without putting extra stress on your already painful joint.
              </li>
              <li>
                <strong>Supportive devices:</strong> Canes, walkers, braces, shoe inserts, and other devices can help reduce stress on your joints.
              </li>
              <li>
                <strong>Injections:</strong>
                <ul>
                  <li>Corticosteroid injections can reduce inflammation and provide short-term pain relief.</li>
                  <li>Hyaluronic acid injections may offer pain relief by providing some cushioning in your knee.</li>
                  <li>Platelet-rich plasma (PRP) involves injecting portions of your own blood into the affected joint, which may reduce pain and improve function.</li>
                </ul>
              </li>
            </ol>
            
            <h3>Surgical Treatments</h3>
            
            <p>
              If conservative treatments don't provide sufficient relief, your doctor may suggest surgery:
            </p>
            
            <ol>
              <li>
                <strong>Arthroscopy:</strong> For minor arthroscopic procedures, your surgeon inserts a small, flexible tube through a small incision near your joint to repair tears or remove loose cartilage.
              </li>
              <li>
                <strong>Osteotomy:</strong> This procedure involves cutting and reshaping bones to reduce pressure on the joint.
              </li>
              <li>
                <strong>Joint replacement (arthroplasty):</strong> In joint replacement surgery, your surgeon removes the damaged joint surfaces and replaces them with plastic and metal parts. Surgical risks include infections and blood clots, and artificial joints can wear out or become loose and may need to be replaced.
              </li>
            </ol>
            
            <h2>Lifestyle Modifications and Home Remedies</h2>
            
            <p>
              Lifestyle changes that can help manage osteoarthritis include:
            </p>
            
            <ul>
              <li>
                <strong>Exercise:</strong> Low-impact activities like swimming, walking, and cycling can strengthen the muscles around your joints, increase flexibility, and reduce pain.
              </li>
              <li>
                <strong>Weight management:</strong> Losing excess weight reduces stress on weight-bearing joints, such as your knees and hips.
              </li>
              <li>
                <strong>Heat and cold therapy:</strong> Applying heat or cold to painful joints can provide temporary relief.
              </li>
              <li>
                <strong>Acupuncture:</strong> Some people find that acupuncture helps relieve osteoarthritis pain.
              </li>
              <li>
                <strong>Dietary supplements:</strong> Glucosamine and chondroitin supplements have mixed results in research, but some people report they help relieve pain.
              </li>
              <li>
                <strong>Yoga and tai chi:</strong> These movement therapies involve gentle exercises and stretches combined with deep breathing that may help reduce osteoarthritis pain and improve movement.
              </li>
            </ul>
            
            <h2>Advanced Treatment Options at Ayushman Hospital, Nagpur</h2>
            
            <p>
              Dr. Murali B.K. at Ayushman Hospital in Nagpur offers cutting-edge treatments for osteoarthritis, including:
            </p>
            
            <ul>
              <li>Advanced minimally invasive arthroscopic procedures</li>
              <li>Regenerative medicine therapies including PRP and stem cell treatments</li>
              <li>Computer-assisted joint replacement surgery for precise implant positioning</li>
              <li>Multi-disciplinary approach with pain management specialists and physical therapists</li>
              <li>Customized rehabilitation programs for optimal recovery</li>
            </ul>
            
            <h2>Prevention Strategies</h2>
            
            <p>
              While you may not be able to prevent osteoarthritis, you can reduce your risk and slow its progression:
            </p>
            
            <ul>
              <li>
                <strong>Stay active but don't overdo it:</strong> Regular exercise strengthens the muscles around your joints, which can help prevent wear and tear on cartilage.
              </li>
              <li>
                <strong>Control your weight:</strong> Excess weight puts additional stress on weight-bearing joints.
              </li>
              <li>
                <strong>Avoid injury:</strong> Major joint injuries can cause cartilage damage, leading to arthritis.
              </li>
              <li>
                <strong>Use proper posture:</strong> Good posture can prevent uneven wear and tear on your joints.
              </li>
              <li>
                <strong>Rest when needed:</strong> Give your joints time to recover after intense activity.
              </li>
            </ul>
            
            <h2>When to See a Doctor</h2>
            
            <p>
              If you have joint pain or stiffness that doesn't go away, make an appointment with your doctor. Early diagnosis and treatment can help manage osteoarthritis symptoms and prevent the condition from worsening.
            </p>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Schedule a Consultation
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                If you're experiencing symptoms of osteoarthritis, Dr. Murali B.K. at Ayushman Hospital in Nagpur can provide expert evaluation and personalized treatment options to help you manage your condition and improve your quality of life.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Book an Appointment
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
                href="/blog/sciatica"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  Sciatica: When Back Pain Radiates Down Your Leg
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Understanding causes and treatments for sciatic nerve pain
                </p>
              </Link>
              
              <Link 
                href="/blog/acl-injuries"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  ACL Injuries in Athletes: Prevention and Recovery
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Learn about one of the most common sports-related knee injuries
                </p>
              </Link>
            </div>
          </section>
          
          {/* Comments Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Comments (4)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">
                    RS
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium text-gray-900 dark:text-white">Rahul Sharma</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">2 days ago</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Thank you for this informative article. I've been dealing with knee pain for years and this helps me understand what might be happening. Will definitely consult with Dr. Murali.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">
                    AP
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium text-gray-900 dark:text-white">Anita Patel</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">5 days ago</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      I found the section on lifestyle modifications particularly helpful. Started with some of the recommended exercises and already feeling some relief in my hip joint.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">
                    VM
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium text-gray-900 dark:text-white">Vijay Mehta</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">1 week ago</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Had a knee replacement done by Dr. Murali last year and the improvement in my quality of life has been tremendous. Wish I had read this article and sought treatment earlier!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">
                    SK
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium text-gray-900 dark:text-white">Sunita Kulkarni</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">2 weeks ago</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Are there any specific foods that can help reduce osteoarthritis inflammation? Would love to see an article on diet recommendations for joint health.
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