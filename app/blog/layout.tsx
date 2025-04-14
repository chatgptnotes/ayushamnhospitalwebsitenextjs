import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-16">
      {/* The pt-16 ensures content doesn't hide under the fixed navbar */}
      {children}
    </div>
  );
} 