import { Github } from "lucide-react";

export default function CTA() {
  return (
    <div className="max-w-3xl mx-auto py-20 border-t border-white/10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Know where to go. Ask for help if you can&apos;t move.
      </h2>
      <p className="text-zinc-400 mb-8">
        AASRA — built by Team ZeroDay Crew for Smart India Hackathon 2026,
        Disaster Management theme.
      </p>
      <a
        href="https://github.com/rvakash13-abd/Aasra"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-aasra hover:bg-aasra-light transition-colors text-white px-6 py-3 font-medium"
      >
        <Github className="w-4 h-4" />
        View on GitHub
      </a>
    </div>
  );
}
