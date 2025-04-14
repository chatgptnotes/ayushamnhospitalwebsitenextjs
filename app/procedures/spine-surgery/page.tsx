import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Spine Surgery in Nagpur - Dr. Murali B.K. | Advanced Spinal Treatment",
  description: "Get expert spine surgery in Nagpur from Dr. Murali B.K. for herniated discs, spinal stenosis, scoliosis, and more. Advanced minimally invasive techniques with faster recovery.",
};

export default function SpineSurgeryPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Spine Surgery in Nagpur
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced surgical treatments by Dr. Murali B.K., Nagpur's leading spine specialist
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Expert Spine Care in Nagpur
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Dr. Murali B.K. is recognized as one of the best spine surgeons in Nagpur, specializing in treating a wide range of spinal conditions using both surgical and non-surgical approaches. With his extensive experience and advanced training, Dr. Murali offers comprehensive care for patients suffering from various spine problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              At Ayushman Nagpur Hospital, Dr. Murali uses state-of-the-art technology and minimally invasive techniques to provide effective treatment with faster recovery times and reduced complications.
            </p>
          </div>
        </section>

        {/* Spine Conditions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Spine Conditions Treated
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Herniated Disc
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                When the soft center of a spinal disc pushes through a crack in the tougher exterior casing, causing pain, numbness, or weakness in the back, legs, or arms. Dr. Murali provides both non-surgical and surgical treatments for herniated discs in Nagpur.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Spinal Stenosis
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A narrowing of the spinal canal that puts pressure on the spinal cord and nerves, causing pain, numbness, and weakness. Dr. Murali specializes in decompression procedures to relieve pressure and restore function.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Scoliosis
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                An abnormal sideways curvature of the spine that can cause pain, uneven shoulders, and breathing difficulties. Dr. Murali offers both non-surgical management and surgical correction for severe cases.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Spinal Fractures
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Breaks in the vertebrae often caused by trauma, osteoporosis, or tumors. Dr. Murali provides treatments ranging from bracing to minimally invasive vertebroplasty and kyphoplasty procedures.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Degenerative Disc Disease
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Age-related changes in spinal discs that can cause pain and limited mobility. Dr. Murali's treatments include pain management, physical therapy, and surgical interventions when necessary.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Spinal Tumors
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Abnormal growths that can develop within or near the spinal cord. Dr. Murali works with a multidisciplinary team to provide comprehensive care, including surgical removal when indicated.
              </p>
            </div>
          </div>
        </section>

        {/* Spine Surgery Procedures */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Advanced Spine Surgery Procedures
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Microdiscectomy
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A minimally invasive procedure to remove the portion of a herniated disc that is pressing on a nerve root or the spinal cord. Dr. Murali performs microdiscectomy with smaller incisions, resulting in less pain and faster recovery compared to traditional open surgery.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Laminectomy
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A procedure that removes a portion of the vertebral bone called the lamina to relieve pressure on the spinal nerves in cases of spinal stenosis. Dr. Murali's precision technique helps preserve spinal stability while effectively decompressing the nerves.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Spinal Fusion
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A procedure that permanently connects two or more vertebrae to improve stability, correct a deformity, or reduce pain. Dr. Murali uses advanced techniques including minimally invasive approaches and computer navigation for optimal outcomes.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Artificial Disc Replacement
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                An alternative to fusion that replaces a damaged disc with an artificial one, preserving motion in the spine. Dr. Murali is one of the few surgeons in Nagpur offering this advanced technique for suitable candidates.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Vertebroplasty and Kyphoplasty
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Minimally invasive procedures to treat spinal fractures by injecting bone cement into the fractured vertebra. These procedures stabilize the fracture, reduce pain, and can restore vertebral height in cases of compression fractures.
              </p>
            </div>
          </div>
        </section>

        {/* Minimally Invasive Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Minimally Invasive Spine Surgery
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dr. Murali B.K. specializes in minimally invasive spine surgery (MISS), which offers several advantages over traditional open surgery:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Smaller incisions resulting in less tissue damage</li>
              <li>Reduced blood loss during surgery</li>
              <li>Lower risk of muscle damage</li>
              <li>Decreased postoperative pain</li>
              <li>Faster recovery and return to daily activities</li>
              <li>Reduced risk of infection and other complications</li>
              <li>Shorter hospital stays, often same-day discharge</li>
            </ul>
            
            <p className="text-gray-700 dark:text-gray-300">
              Using specialized instruments and advanced imaging technology, Dr. Murali performs complex spine procedures through incisions that are often less than an inch long, providing effective treatment with minimal disruption to surrounding tissues.
            </p>
          </div>
        </section>

        {/* Technology and Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Cutting-Edge Technology and Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Computer-Assisted Navigation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dr. Murali utilizes advanced imaging and navigation systems that provide real-time guidance during surgery, allowing for precise implant placement and reduced radiation exposure for patients.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Intraoperative Neurophysiological Monitoring
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                During complex spine surgeries, Dr. Murali employs continuous monitoring of nerve function to minimize the risk of neurological injury and ensure optimal outcomes.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Multidisciplinary Approach
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dr. Murali collaborates with a team of specialists including pain management physicians, neurologists, physical therapists, and rehabilitation experts to provide comprehensive care before and after surgery.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Personalized Treatment Plans
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dr. Murali believes in tailoring treatment to each patient's unique condition, lifestyle, and goals. Surgery is recommended only when necessary, and non-surgical options are explored first when appropriate.
              </p>
            </div>
          </div>
        </section>

        {/* Recovery Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Recovery After Spine Surgery
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Recovery from spine surgery varies depending on the procedure performed and the patient's overall health. Dr. Murali and his team provide comprehensive guidance and support throughout the recovery process to help patients achieve optimal outcomes.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Early Recovery Phase
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Most patients stay in the hospital for 1-3 days after spine surgery. Pain management, preventing complications, and learning proper body mechanics are the focus during this period. For minimally invasive procedures, many patients can return home the same day.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Rehabilitation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Physical therapy typically begins within a few weeks after surgery and plays a crucial role in recovery. Dr. Murali works closely with physical therapists to create personalized rehabilitation programs that focus on strengthening core muscles, improving flexibility, and restoring proper body mechanics.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Return to Activities
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Most patients can return to light activities within 4-6 weeks after minimally invasive procedures, while recovery from more complex surgeries may take 3-6 months. Dr. Murali provides clear guidelines on when it's safe to resume various activities, including work, driving, and exercise.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Long-term Follow-up
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dr. Murali schedules regular follow-up appointments to monitor progress, address any concerns, and make adjustments to the recovery plan as needed. These check-ups are essential for ensuring the best possible outcome from spine surgery.
              </p>
            </div>
          </div>
        </section>

        {/* Patient Testimonial */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Patient Success Stories
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6">
              <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                "For years, I suffered from severe back pain due to a herniated disc. I could barely walk or sit comfortably. After consulting with several doctors, I finally met Dr. Murali B.K. in Nagpur. He performed minimally invasive spine surgery, and I experienced immediate relief from the nerve pain. Three months later, I'm back to my normal activities without any pain. I'm grateful to Dr. Murali for giving me my life back."
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                — Anand Verma, 45, Microdiscectomy Patient
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
              <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                "I was diagnosed with spinal stenosis and was initially terrified of spine surgery. Dr. Murali took the time to explain everything clearly and addressed all my concerns. His minimally invasive approach meant I had much less pain than I expected, and I was walking the day after surgery. His team's support during recovery was exceptional. I highly recommend Dr. Murali to anyone needing spine surgery in Nagpur."
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                — Meena Patel, 58, Laminectomy Patient
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-blue-100 dark:bg-blue-900 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Don't Let Spine Problems Limit Your Life
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              If you're suffering from back pain, nerve symptoms, or other spine-related issues, consult with Dr. Murali B.K. at Ayushman Hospital in Nagpur for expert evaluation and personalized treatment options.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium inline-block"
            >
              Schedule a Consultation
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
                Learn more about Nagpur's leading spine surgeon
              </p>
            </Link>
            <Link
              href="/procedures/knee-replacement-surgery"
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                Knee Replacement Surgery
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore Dr. Murali's expertise in joint replacement
              </p>
            </Link>
          </div>
        </section>

        {/* Footer with Related Keywords */}
        <footer className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400 space-x-2 text-center">
            <span>spine surgery Nagpur</span>
            <span>•</span>
            <span>best spine surgeon Nagpur</span>
            <span>•</span>
            <span>herniated disc treatment</span>
            <span>•</span>
            <span>spinal stenosis surgery</span>
            <span>•</span>
            <span>minimally invasive spine surgery</span>
            <span>•</span>
            <span>spine specialist Nagpur</span>
            <span>•</span>
            <span>Dr. Murali spine surgeon</span>
          </div>
        </footer>
      </div>
    </div>
  );
} 