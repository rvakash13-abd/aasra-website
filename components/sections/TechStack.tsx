const stack = [
  "Kotlin",
  "Jetpack Compose",
  "Firebase Auth",
  "Cloud Firestore",
  "Firebase Cloud Messaging",
  "Google Maps SDK",
  "Fused Location Provider",
  "Retrofit + Open-Meteo API",
  "Android SmsManager",
  "SharedPreferences + Gson",
  "Speech Recognizer API",
];

export default function TechStack() {
  return (
    <div className="max-w-5xl mx-auto py-20 border-t border-white/10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Built with
      </h2>
      <p className="text-zinc-400 max-w-xl mx-auto mb-10">
        A native Android stack chosen for one reason: reliability when the
        network isn&apos;t.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {stack.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full text-sm border border-white/15 text-zinc-200 bg-white/5"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
