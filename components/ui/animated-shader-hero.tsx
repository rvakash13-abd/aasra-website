"use client";

import React from "react";

interface HeroProps {
  trustBadge?: {
    text: string;
    icons?: string[];
  };
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
  className?: string;
}

// Hero content overlay. The animated shader itself now lives in
// <ShaderBackground />, mounted once in the root layout and fixed behind
// the whole page — this component is just the text/buttons layer for the
// first viewport, kept transparent so the shader shows through here too.
const Hero: React.FC<HeroProps> = ({ trustBadge, headline, subtitle, buttons, className = "" }) => {
  return (
    <div className={`relative z-10 w-full h-screen overflow-hidden ${className}`}>
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>

      <div className="absolute left-6 top-6 z-20 md:left-8 md:top-8">
        <div className="flex items-center gap-2 rounded-full border border-aasra-light/30 bg-black/10 px-3 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(75,206,255,0.18)]">
          <span className="h-2.5 w-2.5 rounded-full bg-aasra-light shadow-[0_0_12px_rgba(134,239,172,0.8)]" />
          <span className="text-base font-semibold tracking-[0.28em] text-white uppercase">aasra</span>
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        {trustBadge && (
          <div className="mb-8 animate-fade-in-down">
            <div className="flex items-center gap-2 px-6 py-3 bg-aasra/10 backdrop-blur-md border border-aasra-light/30 rounded-full text-sm">
              {trustBadge.icons && (
                <div className="flex gap-1">
                  {trustBadge.icons.map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </div>
              )}
              <span className="text-aasra-light">{trustBadge.text}</span>
            </div>
          </div>
        )}

        <div className="text-center space-y-6 max-w-5xl mx-auto px-4">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl lg:text-[6.25rem] font-black tracking-[-0.06em] leading-[0.9] animate-fade-in-up animation-delay-200">
              <span className="bg-gradient-to-r from-white via-sky-100 to-sky-300 bg-clip-text text-transparent">
                {headline.line1.split(" ")[0]}
              </span>{" "}
              <span className="bg-gradient-to-r from-aasra-light via-cyan-300 to-sky-200 bg-clip-text text-transparent">
                {headline.line1.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-[6.25rem] font-black tracking-[-0.06em] leading-[0.9] animate-fade-in-up animation-delay-400">
              <span className="bg-gradient-to-r from-sky-100 via-cyan-200 to-aasra-light bg-clip-text text-transparent">
                {headline.line2.split(" ")[0]}
              </span>{" "}
              <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-300 bg-clip-text text-transparent">
                {headline.line2.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </div>

          <div className="max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-200 font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {subtitle}
            </p>
          </div>

          {buttons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up animation-delay-800">
              {buttons.primary && (
                <button
                  onClick={buttons.primary.onClick}
                  className="px-8 py-4 bg-gradient-to-r from-aasra to-aasra-light hover:from-aasra-light hover:to-aasra text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-aasra/25"
                >
                  {buttons.primary.text}
                </button>
              )}
              {buttons.secondary && (
                <button
                  onClick={buttons.secondary.onClick}
                  className="px-8 py-4 bg-black/20 hover:bg-black/30 border border-aasra-light/30 hover:border-aasra-light/50 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  {buttons.secondary.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
