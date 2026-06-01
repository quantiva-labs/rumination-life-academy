import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const stages = [
  {
    title: "Discover",
    headline: "Uncover What Shapes You",
    text: "Uncovering the deep-rooted patterns, beliefs, and behavioural loops that silently shape thinking, perception, decisions, actions, and the direction of life itself.",
    insight:
      "Transformation begins with awareness. What remains unseen continues to shape outcomes.",
  },
  {
    title: "Dissolve",
    headline: "Release What Restricts You",
    text: "Dismantling the internal limitations, fear patterns, and conditioned thinking that relentlessly restrict growth, clarity, capability, and conscious progression.",
    insight:
      "Growth accelerates when limitations are identified and consciously released.",
  },
  {
    title: "Design",
    headline: "Create Who You Can Become",
    text: "Reconstructing awareness, mindset, identity, and human capability through deliberate transformation aligned with meaningful evolution and future possibilities.",
    insight:
      "Lasting change requires the intentional reconstruction of mindset, identity, and capability.",
  },
  {
    title: "Deliver",
    headline: "Live Transformation Daily",
    text: "Anchoring transformation into everyday thinking, communication, behaviour, leadership, learning, and action until excellence becomes a lived identity rather than a temporary outcome.",
    insight:
      "True transformation is complete only when it becomes visible in everyday actions and results.",
  },
];

export default function RuminationMethod() {
  const [active, setActive] = useState(0);
  const current = stages[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % stages.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="method" className="bg-white py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[38px] bg-[#040B16] text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(56,189,248,.18),transparent_32%),radial-gradient(circle_at_82%_58%,rgba(16,185,129,.16),transparent_35%)]" />

          <div className="relative grid lg:grid-cols-[1fr_320px] gap-0">
            {/* Main Story Panel */}
            <div className="p-8 lg:p-14">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                <motion.img
                  src="/logo.svg"
                  alt="Rumination Life Academy"
                  className="w-36 h-36 lg:w-48 lg:h-48 object-contain shrink-0"
                  animate={{ scale: [1, 1.035, 1] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                />

                <div className="flex-1">
                  <p className="text-xs font-black tracking-[0.28em] uppercase text-emerald-300 mb-4">
                    Rumination’s Transformative Ecosystem
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.title}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -18 }}
                      transition={{ duration: 0.45 }}
                    >
                      <h2 className="text-5xl lg:text-7xl font-black leading-none mb-5">
                        {current.title}
                      </h2>

                      <p className="text-2xl lg:text-3xl font-black text-emerald-300 mb-6">
                        {current.headline}
                      </p>

                      <p className="text-white/72 text-lg leading-9 max-w-3xl">
                        {current.text}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-10 max-w-3xl">
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        key={active}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 10, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-sky-300 to-emerald-300"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs font-bold text-white/40">
                      <span>Auto advancing every 10 seconds</span>
                      <span>{active + 1} / {stages.length}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insight Strip */}
              <div className="mt-10 rounded-2xl border border-emerald-300/20 bg-white/5 px-5 py-4">
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-full bg-emerald-300 text-blue-950 flex items-center justify-center font-black shrink-0">
                    ✦
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.insight}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="text-[11px] font-black tracking-[0.22em] uppercase text-emerald-300 mb-1">
                        Ecosystem Insight
                      </p>

                      <p className="text-sm lg:text-base font-semibold text-white/85">
                        {current.insight}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Slim Pathway Navigation */}
            <div className="relative border-t lg:border-t-0 lg:border-l border-white/10 bg-white/[0.03] p-8 lg:p-10 flex items-center">
              <div className="w-full">
                <p className="text-xs font-black tracking-[0.28em] uppercase text-white/35 mb-8">
                  Pathway
                </p>

                <div className="relative">
                  <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-white/12" />

                  <motion.div
                    className="absolute left-[11px] top-4 w-[2px] bg-gradient-to-b from-sky-300 to-emerald-300"
                    animate={{
                      height: `${(active / (stages.length - 1)) * 88}%`,
                    }}
                    transition={{ duration: 0.65 }}
                  />

                  <div className="space-y-8">
                    {stages.map((stage, index) => (
                      <button
                        key={stage.title}
                        onClick={() => setActive(index)}
                        className="relative w-full pl-10 text-left"
                      >
                        <span
                          className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 transition ${
                            active === index
                              ? "bg-emerald-300 border-white shadow-[0_0_28px_rgba(45,212,191,.8)]"
                              : index < active
                              ? "bg-sky-300 border-white/60"
                              : "bg-[#040B16] border-white/25"
                          }`}
                        />

                        <div
                          className={`rounded-full px-5 py-3 transition ${
                            active === index
                              ? "bg-white text-blue-950 shadow-xl"
                              : "text-white/50 hover:text-white"
                          }`}
                        >
                          <p className="text-sm font-black uppercase tracking-wide">
                            {stage.title}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <p className="mt-10 text-sm text-white/45 leading-6">
                  Decode the Inner System.
                  <span className="block text-white/65 font-semibold">
                    Transform the Outer Reality.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}