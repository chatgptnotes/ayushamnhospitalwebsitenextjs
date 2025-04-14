import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Orthopedic Blog - Dr. Murali B.K. | Ayushman Hospital",
  description: "Learn about common orthopedic conditions, treatments, recovery tips, and more from Dr. Murali B.K., Nagpur's leading orthopedic surgeon.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: "osteoarthritis",
      title: "Understanding Osteoarthritis: Causes, Symptoms, and Treatments",
      excerpt: "Osteoarthritis is the most common form of arthritis affecting millions worldwide. Learn about its causes, symptoms, and the latest treatment options available.",
      date: "October 15, 2023",
      author: "Dr. Murali B.K.",
      category: "Joint Conditions",
      readTime: "6 min read",
    },
    {
      id: "rotator-cuff-tears",
      title: "Rotator Cuff Tears: Diagnosis and Treatment Options",
      excerpt: "Rotator cuff tears are a common shoulder injury that can cause pain and limit mobility. Discover symptoms, diagnostic approaches, and treatment options.",
      date: "September 22, 2023",
      author: "Dr. Murali B.K.",
      category: "Shoulder Injuries",
      readTime: "7 min read",
    },
    {
      id: "sciatica",
      title: "Sciatica: When Back Pain Radiates Down Your Leg",
      excerpt: "Sciatica refers to pain that radiates along the sciatic nerve, affecting the lower back, hips, and legs. Understand its causes, prevention, and treatments.",
      date: "August 18, 2023",
      author: "Dr. Murali B.K.",
      category: "Spine Conditions",
      readTime: "5 min read",
    },
    {
      id: "acl-injuries",
      title: "ACL Injuries in Athletes: Prevention and Recovery",
      excerpt: "Anterior Cruciate Ligament (ACL) injuries are common in sports. Learn about prevention strategies, surgical options, and the road to recovery.",
      date: "July 30, 2023",
      author: "Dr. Murali B.K.",
      category: "Sports Injuries",
      readTime: "8 min read",
    },
    {
      id: "carpal-tunnel-syndrome",
      title: "Carpal Tunnel Syndrome: More Than Just Wrist Pain",
      excerpt: "Carpal tunnel syndrome affects millions of people who perform repetitive hand movements. Explore symptoms, risk factors, and treatment approaches.",
      date: "June 12, 2023",
      author: "Dr. Murali B.K.",
      category: "Hand & Wrist Conditions",
      readTime: "6 min read",
    },
    {
      id: "osteoporosis",
      title: "Osteoporosis: Protecting Your Bone Health",
      excerpt: "Osteoporosis makes bones fragile and more prone to fractures. Learn about risk factors, prevention strategies, and treatment options for this silent disease.",
      date: "May 25, 2023",
      author: "Dr. Murali B.K.",
      category: "Bone Health",
      readTime: "7 min read",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "Orthopedic Health Blog by Dr. Murali B.K.",
    "description": "Expert insights on orthopedic conditions, treatments, and tips for a healthier musculoskeletal system",
    "url": "https://example.com/blog",
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
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://example.com/blog/${post.id}`
    })),
    "specialty": "Orthopedic Surgery",
    "knowsAbout": [
      "Joint Conditions",
      "Spine Health",
      "Sports Injuries",
      "Bone Health",
      "Rehabilitation"
    ]
  };

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Orthopedic Health Blog
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Expert insights on orthopedic conditions, treatments, and tips for a healthier musculoskeletal system
            </p>
          </div>

          {/* Blog Categories */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blog?category=all" className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                All Topics
              </Link>
              <Link href="/blog?category=joint" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Joint Conditions
              </Link>
              <Link href="/blog?category=spine" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Spine Health
              </Link>
              <Link href="/blog?category=sports" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Sports Injuries
              </Link>
              <Link href="/blog?category=prevention" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Prevention
              </Link>
              <Link href="/blog?category=recovery" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Recovery & Rehabilitation
              </Link>
            </div>
          </section>

          {/* Featured Post */}
          <section className="mb-16">
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-4">
                Featured Article
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
                  {blogPosts[0].author.split(" ").map(part => part[0]).join("")}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{blogPosts[0].author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{blogPosts[0].date} • {blogPosts[0].readTime}</p>
                </div>
              </div>
              <Link
                href={`/blog/${blogPosts[0].id}`}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Read Full Article
              </Link>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Latest Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <div 
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mb-16">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Stay Updated with Orthopedic Health Tips
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest articles, tips, and updates on orthopedic health directly to your inbox.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium flex-shrink-0">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </section>

          {/* Footer with Related Keywords */}
          <footer className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400 space-x-2 text-center">
              <span>orthopedic blog</span>
              <span>•</span>
              <span>joint pain</span>
              <span>•</span>
              <span>spine health</span>
              <span>•</span>
              <span>arthritis</span>
              <span>•</span>
              <span>sports injuries</span>
              <span>•</span>
              <span>bone health</span>
              <span>•</span>
              <span>Dr. Murali B.K.</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
} 