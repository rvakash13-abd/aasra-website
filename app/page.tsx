"use client";

import Hero from "@/components/ui/animated-shader-hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Phases from "@/components/sections/Phases";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero
        trustBadge={{
          text: "Smart India Hackathon 2026 · Disaster Management",
          icons: ["🚨"],
        }}
        headline={{
          line1: "Find shelter.",
          line2: "Find safety.",
        }}
        subtitle="AASRA connects citizens in emergencies with the authorities and volunteers who can help — floods, cyclones and beyond. It keeps working over basic SMS when the internet fails, which is exactly when it matters most."
        buttons={{
          primary: {
            text: "View on GitHub",
            onClick: () =>
              window.open("https://github.com/rvakash13-abd/Aasra", "_blank"),
          },
          secondary: {
            text: "See How It Works",
            onClick: () =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" }),
          },
        }}
      />

      <div id="about" className="flex flex-col w-full px-8 py-16 md:px-16 lg:py-24 gap-20">
        <About />
        <Features />
        <Phases />
        <TechStack />
        <CTA />
      </div>

      <Footer />
    </>
  );
}
