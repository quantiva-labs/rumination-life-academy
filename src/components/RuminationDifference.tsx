export default function RuminationDifference() {
  const pillars = [
    {
      title: "Decode",
      description:
        "Understanding the hidden operating system behind human behaviour, decisions, emotions and performance.",
    },
    {
      title: "Reframe",
      description:
        "Transforming limiting beliefs, conditioned thinking and unconscious patterns into empowering possibilities.",
    },
    {
      title: "Evolve",
      description:
        "Building new mindsets, capabilities, behaviours and leadership potential aligned to future growth.",
    },
    {
      title: "Sustain",
      description:
        "Embedding transformation into everyday thinking, communication and action until it becomes identity.",
    },
  ];

  return (
    <section className="bg-[#040B16] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <p className="text-sm font-black tracking-[0.25em] uppercase text-emerald-300 mb-4">
            The Rumination Difference
          </p>

          <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
            Why Transformation
            <span className="block text-sky-300">
              Often Fails
            </span>
          </h2>

          <p className="text-xl text-white/70 leading-9">
            Most learning creates awareness.
            <br />
            Few experiences create transformation.
            <br />
            Rumination bridges the gap between knowing and becoming.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-300 to-emerald-300 text-[#040B16] flex items-center justify-center text-xl font-black mb-6">
                {["D", "R", "E", "S"][index]}
              </div>

              <h3 className="text-2xl font-black mb-4">
                {pillar.title}
              </h3>

              <p className="text-white/65 leading-8">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[30px] bg-gradient-to-r from-sky-500/10 to-emerald-500/10 border border-white/10 p-8 lg:p-10">
          <h3 className="text-2xl lg:text-3xl font-black mb-4">
            Transformation is not an event.
          </h3>

          <p className="text-lg text-white/70 leading-8 max-w-4xl">
            It is a deliberate process of awareness, reflection,
            reconstruction and integration. Our methodology is designed
            to create meaningful change that is deeply reflective,
            practically aligned and sustainably transformational.
          </p>
        </div>
      </div>
    </section>
  );
}