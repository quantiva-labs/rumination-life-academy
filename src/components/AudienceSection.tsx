const audiences = [
    {
      title: "Individuals",
      subtitle: "Individuals seeking personal and professional growth.",
      points: ["Confidence and self-leadership", "Emotional resilience and communication mastery"],
      gradient: "from-blue-600 to-violet-600",
    },
    {
      title: "Academia",
      subtitle: "Academic leaders, educators, faculty members, and students.",
      points: ["Learner engagement", "Job-readiness and capability building"],
      gradient: "from-violet-600 to-emerald-500",
    },
    {
      title: "Corporate",
      subtitle: "New joiners, emerging professionals, mid-management and leadership teams.",
      points: ["Leadership capability", "Conscious communication and performance"],
      gradient: "from-emerald-500 to-blue-600",
    },
  ];
  
  export default function AudienceSection() {
    return (
      <section id="audience" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-black text-violet-700 tracking-[0.2em] uppercase mb-4">
            Who Thrives with Rumination
          </p>
  
          <h2 className="text-4xl lg:text-6xl font-black text-blue-950 leading-tight">
            Growth ecosystems for people, classrooms and teams.
          </h2>
        </div>
  
        <div className="grid lg:grid-cols-3 gap-7">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl transition"
            >
              <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.gradient}`} />
  
              <h3 className="text-3xl font-black text-slate-950 mb-3">
                {item.title}
              </h3>
  
              <p className="text-slate-500 font-semibold mb-7">
                {item.subtitle}
              </p>
  
              <ul className="space-y-3 mb-8">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-700">
                    <span className="text-emerald-500 font-black">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
  
              <a className="font-black text-blue-700" href="#contact">
                View programs →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }