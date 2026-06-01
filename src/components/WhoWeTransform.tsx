const audiences = [
  {
    title: "Individuals",
    line: "Every person. Every turning point.",
    text: "For students, seekers, professionals and individuals ready to move beyond limitation into clarity, confidence and personal excellence.",
    points: ["Self-awareness", "Confidence", "Behavioural transformation"],
  },
  {
    title: "Academia",
    line: "Every role. Every classroom.",
    text: "For institutional leaders, educators and learners who want future-ready capability, academic excellence and meaningful human development.",
    points: ["Leadership development", "Future-ready learning", "Institutional excellence"],
  },
  {
    title: "Corporate",
    line: "Every level. Every stage.",
    text: "For new joiners, emerging professionals, managers and leaders seeking capability evolution, team effectiveness and workplace excellence.",
    points: ["Leadership capability", "Team effectiveness", "Growth mindset"],
  },
];

export default function WhoWeTransform() {
  return (
    <section id="transform" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-10">
          <p className="text-sm font-black tracking-[0.25em] uppercase text-emerald-600 mb-4">
            Who We Transform
          </p>

          <h2 className="text-3xl lg:text-5xl font-black text-blue-950 leading-tight mb-5">
            Three Ecosystems.
            <span className="block text-emerald-600">One Philosophy.</span>
          </h2>

          <p className="text-lg text-slate-600 leading-8">
            Awareness is the beginning. Change is the process. Excellence is the destination.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 hover:bg-white hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-black text-blue-950 mb-3">
                {item.title}
              </h3>

              <p className="text-emerald-600 font-black mb-4">
                {item.line}
              </p>

              <p className="text-slate-600 leading-7 mb-6">
                {item.text}
              </p>

              <div className="space-y-3">
                {item.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">
                      ✓
                    </span>
                    <span className="font-semibold text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}