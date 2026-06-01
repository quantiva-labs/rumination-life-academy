export default function AboutSection() {
  const features = [
    {
      title: "Understand",
      text: "Decode the beliefs, patterns, and behaviours shaping thoughts, choices, and performance.",
      icon: "🧠",
    },
    {
      title: "Transform",
      text: "Use NLP-based learning to shift inner narratives and create sustainable behavioural change.",
      icon: "🌱",
    },
    {
      title: "Thrive",
      text: "Build clarity, confidence, communication, and conscious leadership in real life.",
      icon: "🎯",
    },
  ];

  const stats = [
    ["10K+", "Learners", "👥"],
    ["50+", "Academic Partners", "🎓"],
    ["100+", "Corporate Partners", "🏢"],
    ["20+", "Years", "🏅"],
  ];

  return (
    <section id="about" className="bg-white py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-center">
          <div>
            <p className="text-sm font-black tracking-[0.25em] uppercase text-violet-700 mb-3">
              About Us
            </p>

            <div className="h-1 w-20 bg-gradient-to-r from-violet-600 to-emerald-400 rounded-full mb-6" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08] text-blue-950 mb-5">
              We Decode the Inner System.
              <span className="block">
                You{" "}
                <span className="bg-gradient-to-r from-violet-700 via-blue-700 to-emerald-600 bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                the Outer Reality.
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-7 lg:leading-8 mb-7 max-w-2xl">
              Rumination Life Academy helps individuals, educators, and
              organizations unlock human potential through self-awareness,
              intentional thinking, and transformative learning.
            </p>

            <div className="relative">
              <div className="absolute left-[32px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-violet-500 via-blue-500 to-emerald-500" />

              <div className="space-y-6">
                {features.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative flex gap-5 items-start"
                  >
                    <div className="relative z-10 min-w-[66px] h-[66px] rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-violet-100 via-blue-100 to-emerald-100" />
                      <div className="relative text-2xl">{item.icon}</div>
                    </div>

                    <div className="flex-1 bg-white rounded-[22px] border border-slate-200 p-4 lg:p-5 shadow-sm hover:shadow-lg transition">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-emerald-500 text-white flex items-center justify-center font-black text-xs">
                          0{index + 1}
                        </div>

                        <h3 className="text-xl font-black text-blue-950">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 leading-7 text-sm lg:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 ml-[86px] inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-500 px-5 py-3 text-white text-sm font-black shadow-lg">
                <span>✦</span>
                Conscious Transformation Journey
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[30px] overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
                alt="Transformation journey"
                className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover"
              />
            </div>

            <div className="absolute left-[-40px] top-24 w-[280px] rounded-[26px] bg-blue-950 text-white p-6 shadow-2xl hidden 2xl:block">
              <p className="text-4xl text-violet-400 leading-none mb-3">“</p>

              <p className="text-base leading-7">
                We empower people to break through limitations and create{" "}
                <span className="text-emerald-300 font-bold">
                  meaningful, measurable change.
                </span>
              </p>

              <p className="mt-6 text-emerald-300 italic">
                Transform Within. Lead Beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] bg-blue-950 text-white p-5 lg:p-6 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div
              key={item[1]}
              className="flex items-center gap-4 md:border-r md:border-white/15 last:border-r-0"
            >
              <div className="min-w-[52px] h-[52px] rounded-full bg-white/10 flex items-center justify-center text-xl">
                {item[2]}
              </div>

              <div>
                <p className="text-2xl lg:text-3xl font-black">{item[0]}</p>
                <p className="text-white/70 text-xs sm:text-sm font-semibold">
                  {item[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}