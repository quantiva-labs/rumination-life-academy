const testimonials = [
  {
    quote:
      "Outstanding work with over 500 MBA students. Their activity-based module moved beyond classroom learning into hands-on, real-world scenarios.",
    name: "Dr. N. Venkata Sastry",
    role: "Director – Career Centre, SRM University",
    color: "from-sky-400 to-cyan-300",
  },
  {
    quote:
      "Subha and her team exceeded our expectations. Their facilitation encouraged participation, reflection, confidence and resilience.",
    name: "Prof. (Dr.) Subhashree Natarajan",
    role: "Dean – School of Business, RV University",
    color: "from-emerald-400 to-lime-300",
  },
  {
    quote:
      "An exceptional Growth Mindset workshop with a student-centric approach. The dynamic hands-on format left a lasting impact.",
    name: "Dr. Narayani Ramachandran",
    role: "Professor & Director, NMIMS Bengaluru",
    color: "from-violet-400 to-fuchsia-300",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-14 bg-[#040B16] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-black tracking-[0.25em] uppercase text-emerald-300 mb-3">
              Impact Wall
            </p>

            <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-5">
              Voices of
              <span className="block text-sky-300">Transformation</span>
            </h2>

            <p className="text-white/65 leading-7 mb-7">
              Trusted by learners, educators and leaders across institutions
              and industries.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["10K+", "Learners"],
                ["100+", "Programs"],
                ["500+", "MBA Students"],
                ["3", "Ecosystems"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white/8 border border-white/10 p-4"
                >
                  <p className="text-3xl font-black text-emerald-300">
                    {num}
                  </p>
                  <p className="text-sm text-white/55 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="relative rounded-[26px] bg-white/8 border border-white/10 p-5 overflow-hidden hover:-translate-y-1 transition"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
                />

                <p className="text-4xl text-white/20 mb-3">“</p>

                <p className="text-sm leading-7 text-white/72 mb-5">
                  {item.quote}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-sm font-black text-white">
                    {item.name}
                  </h3>

                  <p className="text-xs text-emerald-300 mt-1 leading-5">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-sky-500/15 via-emerald-500/15 to-violet-500/15 border border-white/10 px-6 py-4 text-center">
          <p className="text-sm lg:text-base font-semibold text-white/80">
            Creating measurable transformation through experiential learning,
            behavioural insight and conscious capability development.
          </p>
        </div>
      </div>
    </section>
  );
}