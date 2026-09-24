const phases = [
  {
    label: "Before",
    color: "text-amber-400",
    ring: "ring-amber-400/30",
    title: "Risk mitigation & planning",
    points: [
      "Live weather monitoring computes flood-risk level for a citizen's location",
      "Proactive storm alerts pushed by email and SMS before conditions peak",
      "Volunteer network pre-registered and approved ahead of time",
    ],
  },
  {
    label: "During",
    color: "text-rose-400",
    ring: "ring-rose-400/30",
    title: "Real-time management",
    points: [
      "Live shelter occupancy, food, water and medicine availability",
      "Priority-scored rescue requests, triaged automatically",
      "Offline-first design keeps working when networks degrade",
    ],
  },
  {
    label: "After",
    color: "text-emerald-400",
    ring: "ring-emerald-400/30",
    title: "Recovery & accountability",
    points: [
      "The safety loop keeps a case open until the citizen confirms safe",
      "Response data feeds back into better planning for next time",
      "Volunteer coverage data highlights gaps for future preparedness",
    ],
  },
];

export default function Phases() {
  return (
    <div className="max-w-6xl mx-auto py-20 border-t border-white/10">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Built for the full disaster cycle
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Most disaster apps only cover response. AASRA is designed around
          risk mitigation, planning and management — before, during and
          after.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {phases.map((phase) => (
          <div
            key={phase.label}
            className={`rounded-2xl border border-white/10 bg-white/5 p-7 ring-1 ${phase.ring}`}
          >
            <span
              className={`text-xs font-semibold uppercase tracking-widest ${phase.color}`}
            >
              {phase.label}
            </span>
            <h3 className="text-xl font-bold text-white mt-2 mb-4">
              {phase.title}
            </h3>
            <ul className="space-y-3">
              {phase.points.map((point) => (
                <li
                  key={point}
                  className="text-sm text-zinc-300 leading-relaxed flex gap-2"
                >
                  <span className={`${phase.color} mt-1`}>&bull;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
