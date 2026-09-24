import type { Metadata } from "next";
import "./globals.css";
import ShaderBackground from "@/components/ui/shader-background";

export const metadata: Metadata = {
  title: "AASRA — Disaster Relief & Rescue Coordination Platform",
  description:
    "AASRA connects citizens in emergencies with authorities and volunteers — live shelter tracking, priority rescue requests, offline SMS alerts, and a safety-confirmation loop built for floods, cyclones and disasters across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {/* Fixed, full-page animated shader — sits behind every section on every page */}
        <ShaderBackground />
        {/* Dark scrim over the shader so text stays readable while scrolling */}
        <div className="fixed inset-0 bg-black/55 pointer-events-none" style={{ zIndex: 1 }} />
        <div className="relative" style={{ zIndex: 10 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
