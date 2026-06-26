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
    <section id="method" className="overflow-hidden bg-white py-8 lg:py-14">
      <div className="mx-auto max-w-8xl px-4 lg:px-9">
        <div className="relative overflow-hidden rounded-[26px] border border-[#B7DFE3] bg-gradient-to-br from-white via-[#F6FFFC] to-[#FDF4FF] shadow-xl lg:rounded-[38px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(15,139,111,.08),transparent_32%),radial-gradient(circle_at_82%_58%,rgba(176,24,134,.08),transparent_35%)]" />

          <div className="relative grid lg:grid-cols-[1fr_320px]">
            {/* Main Story Panel */}
            <div className="p-5 lg:p-14">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-12">
                <motion.img
                  src="/logo.svg"
                  alt="Rumination Life Academy"
                  className="mx-auto h-20 w-20 shrink-0 object-contain lg:mx-0 lg:h-44 lg:w-44"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                />

                <div className="flex-1">
                  <p className="mb-3 text-center text-[10px] font-black uppercase tracking-[0.22em] text-[#0F8B6F] lg:mb-4 lg:text-left lg:text-xs lg:tracking-[0.28em]">
                    Rumination&apos;s Transformative Ecosystem
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.title}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -18 }}
                      transition={{ duration: 0.45 }}
                    >
                      <h2 className="mb-3 text-center text-2xl font-black leading-none text-[#05263B] lg:mb-5 lg:text-left lg:text-4xl">
                        {current.title}
                      </h2>

                      <p className="mx-auto max-w-3xl text-center text-[15px] leading-7 text-slate-600 sm:text-[16px] lg:mx-0 lg:text-left lg:text-lg lg:leading-9">
                        {current.text}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-6 max-w-3xl lg:mt-10">
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        key={active}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 20, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-[#05263B] via-[#0F8B6F] to-[#B01886]"
                      />
                    </div>

                    <div className="mt-4 hidden items-center justify-between text-xs font-bold text-slate-500 lg:flex">
                      <span>Auto advancing every 20 seconds</span>
                      <span>
                        {active + 1} / {stages.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insight Strip */}
              <div className="mt-6 rounded-2xl border border-[#B7DFE3] bg-white px-4 py-3 shadow-sm lg:mt-10 lg:px-5 lg:py-4">
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#05263B] via-[#0F8B6F] to-[#B01886] font-black text-white lg:h-9 lg:w-9">
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
                      <p className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#0F8B6F] lg:text-[11px] lg:tracking-[0.22em]">
                        Ecosystem Insight
                      </p>

                      <p className="text-[13px] font-semibold leading-6 text-[#05263B] lg:text-base">
                        {current.insight}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Pathway Navigation */}
            <div className="relative flex items-center border-t border-[#D7E7E9] bg-[#F8FBFC] p-5 lg:border-l lg:border-t-0 lg:p-10">
              <div className="w-full">
                <p className="mb-5 text-[10px] font-black uppercase tracking-[0.24em] text-slate-500 lg:mb-8 lg:text-xs lg:tracking-[0.28em]">
                  Pathway
                </p>

                <div className="relative">
                  <div className="absolute left-[11px] bottom-4 top-4 w-[2px] bg-[#D7E7E9]" />

                  <motion.div
                    className="absolute left-[11px] top-4 w-[2px] bg-gradient-to-b from-[#05263B] via-[#0F8B6F] to-[#B01886]"
                    animate={{
                      height: `${(active / (stages.length - 1)) * 88}%`,
                    }}
                    transition={{ duration: 0.65 }}
                  />

                  <div className="space-y-5 lg:space-y-8">
                    {stages.map((stage, index) => (
                      <button
                        key={stage.title}
                        onClick={() => setActive(index)}
                        className="relative w-full pl-10 text-left"
                      >
                        <span
                          className={`absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 transition ${
                            active === index
                              ? "border-white bg-[#0F8B6F] shadow-lg"
                              : index < active
                              ? "border-white bg-[#B01886]"
                              : "border-[#D7E7E9] bg-white"
                          }`}
                        />

                        <div
                          className={`rounded-full px-5 py-2.5 transition lg:py-3 ${
                            active === index
                              ? "bg-gradient-to-r from-[#05263B] via-[#0F8B6F] to-[#B01886] text-white shadow-lg"
                              : "text-slate-500 hover:text-[#05263B]"
                          }`}
                        >
                          <p className="text-xs font-black uppercase tracking-wide lg:text-sm">
                            {stage.title}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-[13px] leading-6 text-slate-500 lg:mt-10 lg:text-sm">
                  Decode the Inner System.
                  <span className="block font-semibold text-[#05263B]">
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