import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Orthopedic Surgeon in Nagpur - Dr. Murali B.K. | Ayushman Hospital",
  description: "Dr. Murali B.K. is Nagpur's top orthopedic surgeon specializing in joint replacements, knee surgery, spine surgery, and sports injuries. Book an appointment at Ayushman Hospital today.",
  keywords: "orthopedic surgeon Nagpur, best orthopedic doctor, knee replacement surgery, joint replacement, spine surgery Nagpur, Dr. Murali B.K., Ayushman Hospital, sports injury treatment",
  openGraph: {
    title: "Best Orthopedic Surgeon in Nagpur - Dr. Murali B.K. | Ayushman Hospital",
    description: "Dr. Murali B.K. is Nagpur's top orthopedic surgeon with over 15 years experience in joint replacements, spine surgery & sports injuries. Schedule an appointment today.",
    url: "https://www.ayushmannagpurhospital.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Ayushman Hospital Nagpur",
    "url": "https://www.ayushmannagpurhospital.com",
    "logo": "https://www.ayushmannagpurhospital.com/logo.jpg",
    "description": "Ayushman Hospital is Nagpur's premier orthopedic facility led by Dr. Murali B.K., offering specialized care for knee replacement, spine surgery, and sports injuries.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd floor, Shrivardhan Complex, next to Big Bazaar, Lokmat Square",
      "addressLocality": "Ramdaspeth, Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440012",
      "addressCountry": "IN"
    },
    "telephone": "+91-7030974619",
    "email": "ayushmanhos@gmail.com",
    "medicalSpecialty": [
      "Orthopedic Surgery",
      "Joint Replacement",
      "Spine Surgery",
      "Sports Medicine",
      "Trauma Care",
      "Arthroscopy"
    ],
    "availableService": [
      "Knee Replacement Surgery",
      "Hip Replacement Surgery",
      "Spine Surgery",
      "Sports Injury Treatment",
      "Fracture Care",
      "Arthroscopic Surgery",
      "Trauma Care",
      "Physiotherapy"
    ],
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-19:00",
    "sameAs": [
      "https://www.facebook.com/ayushmanhospital",
      "https://twitter.com/ayushmanhospital",
      "https://www.linkedin.com/in/ayushmanhospital"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ayushman Hospital",
    "image": "https://www.ayushmannagpurhospital.com/logo.jpg",
    "priceRange": "₹₹₹",
    "@id": "https://www.ayushmannagpurhospital.com",
    "url": "https://www.ayushmannagpurhospital.com",
    "telephone": "+91-7030974619",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd floor, Shrivardhan Complex, next to Big Bazaar, Lokmat Square",
      "addressLocality": "Ramdaspeth, Nagpur",
      "postalCode": "440012",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1458,
      "longitude": 79.0882
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00",
        "closes": "14:00"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ayushmannagpurhospital.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
