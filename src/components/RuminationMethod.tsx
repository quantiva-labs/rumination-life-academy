
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const stages = [
  {
    title: "Discover",
    
    text: "Uncovering the deep-rooted patterns, beliefs, and behavioural loops that silently shape thinking, perception, decisions, actions, and the direction of life itself.",
    insight:
      "Transformation begins with awareness. What remains unseen continues to shape outcomes.",
  },
  {
    title: "Dissolve",
    
    text: "Dismantling the internal limitations, fear patterns, and conditioned thinking that relentlessly restrict growth, clarity, capability, and conscious progression.",
    insight:
      "Growth accelerates when limitations are identified and consciously released.",
  },
  {
    title: "Design",
    
    text: "Reconstructing awareness, mindset, identity, and human capability through deliberate transformation aligned with meaningful evolution and future possibilities.",
    insight:
      "Lasting change requires the intentional reconstruction of mindset, identity, and capability.",
  },
  {
    title: "Deliver",
    
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
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="method" className="bg-white py-14 overflow-hidden">
      <div className="max-w-8xl mx-auto px-9">
        <div className="relative overflow-hidden rounded-[38px] bg-gradient-to-br from-white via-[#F6FFFC] to-[#FDF4FF] border border-[#B7DFE3] shadow-xl">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(15,139,111,.08),transparent_32%),radial-gradient(circle_at_82%_58%,rgba(176,24,134,.08),transparent_35%)]" />

          <div className="relative grid lg:grid-cols-[1fr_320px] gap-0">

            {/* Main Story Panel */}
            <div className="p-8 lg:p-14">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">

                <motion.img
                  src="/logo.svg"
                  alt="Rumination Life Academy"
                  className="w-32 h-32 lg:w-44 lg:h-44 object-contain shrink-0"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                />

                <div className="flex-1">

                  <p className="text-xs font-black tracking-[0.28em] uppercase text-[#0F8B6F] mb-4">
                    Rumination's Transformative Ecosystem
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.title}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -18 }}
                      transition={{ duration: 0.45 }}
                    >
                      <h2 className="text-1xl lg:text-4xl font-black leading-none mb-5 text-[#05263B]">
                        {current.title}
                      </h2>

                      <p className="text-xl lg:text-2xl font-black text-[#0F8B6F] mb-6">
                        {current.headline}
                      </p>

                      <p className="text-slate-600 text-lg leading-9 max-w-3xl">
                        {current.text}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-10 max-w-3xl">
                    <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <motion.div
                        key={active}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 20, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-[#05263B] via-[#0F8B6F] to-[#B01886]"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-500">
                      <span>Auto advancing every 20 seconds</span>
                      <span>
                        {active + 1} / {stages.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insight Strip */}
              <div className="mt-10 rounded-2xl border border-[#B7DFE3] bg-white px-5 py-4 shadow-sm">
                <div className="flex gap-4 items-start">

                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#05263B] via-[#0F8B6F] to-[#B01886] text-white flex items-center justify-center font-black shrink-0">
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
                      <p className="text-[11px] font-black tracking-[0.22em] uppercase text-[#0F8B6F] mb-1">
                        Ecosystem Insight
                      </p>

                      <p className="text-sm lg:text-base font-semibold text-[#05263B]">
                        {current.insight}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                </div>
              </div>
            </div>

            {/* Pathway Navigation */}
            <div className="relative border-t lg:border-t-0 lg:border-l border-[#D7E7E9] bg-[#F8FBFC] p-8 lg:p-10 flex items-center">
              <div className="w-full">

                <p className="text-xs font-black tracking-[0.28em] uppercase text-slate-500 mb-8">
                  Pathway
                </p>

                <div className="relative">

                  <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-[#D7E7E9]" />

                  <motion.div
                    className="absolute left-[11px] top-4 w-[2px] bg-gradient-to-b from-[#05263B] via-[#0F8B6F] to-[#B01886]"
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
                              ? "bg-[#0F8B6F] border-white shadow-lg"
                              : index < active
                              ? "bg-[#B01886] border-white"
                              : "bg-white border-[#D7E7E9]"
                          }`}
                        />

                        <div
                          className={`rounded-full px-5 py-3 transition ${
                            active === index
                              ? "bg-gradient-to-r from-[#05263B] via-[#0F8B6F] to-[#B01886] text-white shadow-lg"
                              : "text-slate-500 hover:text-[#05263B]"
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

                <p className="mt-10 text-sm text-slate-500 leading-6">
                  Decode the Inner System.
                  <span className="block text-[#05263B] font-semibold">
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