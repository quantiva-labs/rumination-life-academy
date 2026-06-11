import { useEffect, useState } from "react";

type EcosystemKey = "individuals" | "academia" | "corporate";

const ecosystems: { key: EcosystemKey; title: string; desc: string }[] = [
  {
    key: "individuals",
    title: "Individuals",
    desc: "Students to seekers. Every person, every turning point.",
  },
  {
    key: "academia",
    title: "Academia",
    desc: "Institutional leaders to educators to learners. Every role, every classroom.",
  },
  {
    key: "corporate",
    title: "Corporate",
    desc: "New joiners to the C-suite. Every level, every stage.",
  },
];

const programs = {
  individuals: [
    {
      title: "Understand Yourself",
      desc: "Building Self Awareness, Identity Clarity and Personal Direction",
      items: [
        "The Inner Blueprint",
        "The Identity Code",
        "The IOS Assessment & Debrief",
        "The Belief Architecture Lab",
        "The Purpose Discovery Workshop",
      ],
    },
    {
      title: "Strengthen Yourself",
      desc: "Building Confidence, Communication and Personal Effectiveness",
      items: [
        "The Confidence Code",
        "The Communication Excellence Lab",
        "The Influence Architecture Masterclass",
        "The Relationship Intelligence Studio",
        "The Personal Mastery Accelerator",
      ],
    },
    {
      title: "Advance Yourself",
      desc: "Building Professional Identity, Career Readiness and Global Opportunities",
      items: [
        "The Professional Identity Lab",
        "The Career Architecture Workshop",
        "The Interview Excellence Accelerator",
        "The Global Communicator",
        "The Higher Education Launchpad",
      ],
    },
  ],
  academia: [
    {
      title: "Leaders",
      desc: "Driving Institutional Vision, Transformation and Strategic Alignment",
      items: [
        "The Visionary Leadership Workshop",
        "The Academic Leadership Excellence Lab",
        "The Stakeholder Synergy Masterclass",
        "The Industry Integrated Strategy Forum",
        "The Systems Thinking and Governance Studio",
      ],
    },
    {
      title: "Educators",
      desc: "Enabling Experiential Learning, Learner Engagement and Capability Development",
      items: [
        "The Conscious Educator Workshop",
        "The Transformational Classroom Lab",
        "The Future Ready Academic Masterclass",
        "The Influential Facilitator Studio",
        "The Evolutionary Learning Ecosystem Forum",
      ],
    },
    {
      title: "Learners",
      desc: "Building Professional Identity, Workforce Readiness and Career Differentiation",
      items: [
        "Freshers Orientation and Professional Mindset Transformation",
        "From Semester One to Pre Final Year — The Progressive Competency Journey",
        "Get Smart — Interview Readiness Drill",
        "Behavioural Competency Accelerator",
        "Communication Excellence Lab",
      ],
    },
  ],
  corporate: [
    {
      title: "Lead Yourself",
      desc: "Building Personal Effectiveness, Professional Presence and Leadership Readiness",
      items: [
        "Own Who You Are",
        "Speak. Influence. Impact.",
        "The Personal Mastery Suite",
        "Executive Presence Lab",
        "The Emerging Leader Accelerator",
      ],
    },
    {
      title: "Lead Others",
      desc: "Building Leadership Capability, Team Effectiveness and People Excellence",
      items: [
        "Lead People Forward",
        "Build Teams That Move",
        "The Leadership Mastery Suite",
        "Coaching for Performance",
        "High Trust High Performance Teams",
      ],
    },
    {
      title: "Lead the Organisation",
      desc: "Building Culture, Capability and Sustainable Organisational Growth",
      items: [
        "Build the Organisation Within",
        "Talent and Performance Excellence Suite",
        "Strategic Leadership Forum",
        "Culture and Capability Transformation Lab",
        "Organisation Development Accelerator",
      ],
    },
  ],
};

export default function WhoWeTransformPrograms() {
  const [active, setActive] = useState<EcosystemKey | null>(null);

  const handleExplore = (key: EcosystemKey) => {
    setActive((current) => (current === key ? null : key));
  };

  useEffect(() => {
    const handleOpenProgram = (event: Event) => {
      const customEvent = event as CustomEvent<EcosystemKey>;
      setActive(customEvent.detail);
    };

    window.addEventListener("open-program", handleOpenProgram);

    return () => {
      window.removeEventListener("open-program", handleOpenProgram);
    };
  }, []);

  return (
    <section
      id="transform"
      onClick={() => setActive(null)}
      className="relative overflow-hidden bg-[#F8F4E8] px-6 py-14"
    >
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#D9A441]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold text-[#111827] md:text-5xl">
            Who We Transform
          </h2>

          <p className="mt-3 font-serif text-2xl font-semibold text-[#1E3A8A] md:text-3xl">
            Three Ecosystems. One Philosophy.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
            Awareness is the beginning. Change is the process. Excellence is the
            destination.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ecosystems.map((eco) => {
            const isActive = active === eco.key;

            return (
              <div
                key={eco.key}
                onClick={(e) => e.stopPropagation()}
                className={`group rounded-[1.75rem] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isActive
                    ? "border-[#152B68] bg-[#152B68] text-white"
                    : "border-white/80 bg-white/90 text-[#111827]"
                }`}
              >
                <div
                  className={`mb-5 h-1.5 w-16 rounded-full ${
                    isActive ? "bg-[#D9A441]" : "bg-[#1E3A8A]"
                  }`}
                />

                <h3 className="font-serif text-2xl font-bold">{eco.title}</h3>

                <p
                  className={`mt-3 min-h-[54px] text-sm leading-6 ${
                    isActive ? "text-white/85" : "text-gray-600"
                  }`}
                >
                  {eco.desc}
                </p>

                <button
                  onClick={() => handleExplore(eco.key)}
                  className={`mt-5 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-white text-[#152B68] hover:bg-[#F8F4E8]"
                      : "bg-[#1E3A8A] text-white hover:bg-[#152B68]"
                  }`}
                >
                  {isActive ? "Exit Programs" : "Explore Programs"}
                </button>
              </div>
            );
          })}
        </div>

        {active && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-9 rounded-[2rem] border border-white/80 bg-white/95 p-6 shadow-2xl md:p-8"
          >
            <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1E3A8A]">
                  Programs
                </p>

                <h3 className="mt-2 font-serif text-3xl font-bold capitalize text-[#111827]">
                  {active}
                </h3>
              </div>

              {active === "academia" ? (
                <a
                  href="/brochures/academia-brochure.pdf"
                  download
                  className="inline-flex w-fit rounded-full bg-[#152B68] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1E3A8A]"
                >
                  Download Brochure
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex w-fit cursor-not-allowed rounded-full bg-gray-400 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Brochure Coming Soon
                </button>
              )}
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {programs[active].map((program) => (
                <div
                  key={program.title}
                  className="rounded-[1.5rem] border border-[#2A4A9B] bg-[#152B68] p-5 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h4 className="text-lg font-bold uppercase tracking-wide text-white">
                    {program.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    {program.desc}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {program.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-6 text-white"
                      >
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A441]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}