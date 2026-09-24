export default function About() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <p className="uppercase tracking-widest text-sm text-aasra-light mb-4">
        Smart India Hackathon 2026 · Disaster Management
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Find shelter. Find safety.
      </h2>
      <p className="text-lg text-zinc-300 leading-relaxed mb-6">
        AASRA is a disaster relief and rescue coordination platform that
        connects citizens in emergencies — floods, cyclones and other
        disasters — with the authorities and volunteers who can help them.
        Built for real-world outages, not just ideal conditions, it keeps
        working over basic SMS when the internet fails, which is exactly
        when it matters most.
      </p>
      <p className="text-lg text-zinc-300 leading-relaxed">
        It covers the full disaster cycle — proactive weather alerts{" "}
        <span className="text-aasra-light">before</span> a disaster, live
        shelter tracking and priority rescue{" "}
        <span className="text-aasra-light">during</span> one, and a
        safety-confirmation loop <span className="text-aasra-light">after</span>{" "}
        — so no one is marked safe until they actually are.
      </p>
    </div>
  );
}
