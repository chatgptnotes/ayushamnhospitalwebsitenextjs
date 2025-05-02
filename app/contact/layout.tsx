import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dr. Murali B.K. - Book an Appointment | Ayushman Nagpur Hospital",
  description: "Contact the best orthopedic surgeon in Nagpur, Dr. Murali B.K., at 7030974619 to book your appointment for joint replacement, spine surgery, or other orthopedic treatments at Ayushman Nagpur Hospital.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 