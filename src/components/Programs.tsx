const programs = [
  {
    title: "Individual Transformation",
    subtitle: "Personal Growth & Human Potential",
    description:
      "Rumination decodes the inner operating system shaping thought, behaviour, identity, capability and human potential — designed for deep and lasting transformation.",
    outcomes: [
      "Self Awareness",
      "Confidence Building",
      "Communication Excellence",
      "Life & Career Clarity",
    ],
  },
  {
    title: "Academic Transformation",
    subtitle: "Future Ready Educational Ecosystems",
    description:
      "Rumination transforms academic ecosystems by aligning leadership, pedagogy, learner capability and institutional direction toward future-ready progression and meaningful human development.",
    outcomes: [
      "Leadership Development",
      "Faculty Excellence",
      "Student Transformation",
      "Institutional Growth",
    ],
  },
  {
    title: "Corporate Transformation",
    subtitle: "Leadership & Workplace Excellence",
    description:
      "Rumination transforms corporate ecosystems through human-centred interventions focused on capability evolution, leadership transformation and workplace effectiveness.",
    outcomes: [
      "Leadership Capability",
      "Team Effectiveness",
      "Growth Mindset",
      "Workplace Excellence",
    ],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <p className="text-sm font-black tracking-[0.25em] uppercase text-emerald-600 mb-4">
            Our Programs
          </p>

          <h2 className="text-4xl lg:text-6xl font-black text-blue-950 leading-tight mb-6">
            This Is Where
            <span className="block text-emerald-600">
              Change Begins
            </span>
          </h2>

          <p className="text-xl text-slate-600 leading-9">
            Designed for individuals, institutions and organisations seeking
            meaningful transformation, capability development and sustained excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-[32px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600 mb-4">
                {program.subtitle}
              </p>

              <h3 className="text-3xl font-black text-blue-950 mb-5">
                {program.title}
              </h3>

              <p className="text-slate-600 leading-8 mb-8">
                {program.description}
              </p>

              <div className="space-y-3 mb-8">
                {program.outcomes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-black">
                      ✓
                    </div>

                    <span className="font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="font-black text-emerald-600 hover:text-blue-950 transition">
                Explore Programs →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}