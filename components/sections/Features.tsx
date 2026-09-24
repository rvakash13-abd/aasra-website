import {
  MapPin,
  ListOrdered,
  ShieldCheck,
  MessageSquareText,
  CloudRain,
  Languages,
  Users,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Live shelter map",
    description:
      "Real-time occupancy, food, water and medicine availability across shelters, shops and health centers, with one-tap navigation to the nearest one.",
  },
  {
    icon: ListOrdered,
    title: "Priority rescue queue",
    description:
      "Rescue requests are scored by urgency — injury, elderly or disabled presence — so the most critical cases are triaged first, not first-come-first-served.",
  },
  {
    icon: ShieldCheck,
    title: "The safety loop",
    description:
      "A rescue request stays open, not resolved, until the citizen confirms \u201cI Am Safe.\u201d No one is marked handled just because an action was logged.",
  },
  {
    icon: MessageSquareText,
    title: "Offline-first SMS alerts",
    description:
      "Storm alerts and shelter details reach citizens by direct SMS, working over basic cellular signal with zero mobile data required.",
  },
  {
    icon: CloudRain,
    title: "Weather-triggered alerts",
    description:
      "Live rainfall and wind-speed monitoring computes flood risk and proactively pushes warnings before conditions turn dangerous.",
  },
  {
    icon: Languages,
    title: "11-language & voice support",
    description:
      "English plus 10 major Indian languages, with locale-aware voice search so language is never a barrier to getting help.",
  },
  {
    icon: Users,
    title: "Volunteer network",
    description:
      "Citizens can register as volunteers; authorities review and approve trusted responders before they get dashboard access.",
  },
  {
    icon: LayoutDashboard,
    title: "Role-based dashboards",
    description:
      "Separate, focused experiences — citizens get \u201cI need help\u201d tools, authorities get acknowledge, update and resolve controls.",
  },
];

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What AASRA does
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Every feature is built around one question: does this help someone
          get to safety faster, or help an authority know they actually did?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-aasra-light/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-aasra/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-aasra-light" strokeWidth={1.75} />
              </div>
              <h3 className="text-white font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
