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

            if (active && !isActive) {
              return null;
            }

            return (
              <div
                key={eco.key}
                className={`rounded-[1.75rem] border shadow-sm transition-all duration-500 ${
                  isActive
                    ? "md:col-span-3 border-[#152B68] bg-[#152B68] text-white shadow-2xl"
                    : "border-[#152B68] bg-[#152B68] p-6 text-white hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                {!isActive ? (
                  <>
                    <div className="mb-5 h-1.5 w-16 rounded-full bg-white" />

                    <h3 className="font-serif text-2xl font-bold">
                      {eco.title}
                    </h3>

                    <p className="mt-3 min-h-[54px] text-sm leading-6 text-white/85">
                      {eco.desc}
                    </p>

                    <button
                      onClick={() => handleExplore(eco.key)}
                      className="mt-5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#152B68] transition hover:bg-[#F8F4E8]"
                    >
                      Explore Programs
                    </button>
                  </>
                ) : (
                  <div className="grid gap-6 p-6 md:grid-cols-[0.75fr_2.25fr] md:p-8">
                    <div>
                      <div className="mb-5 h-1.5 w-16 rounded-full bg-[#D9A441]" />

                      <h3 className="font-serif text-3xl font-bold">
                        {eco.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/85">
                        {eco.desc}
                      </p>

                      <button
                        onClick={() => setActive(null)}
                        className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#152B68] transition hover:bg-[#F8F4E8]"
                      >
                        Close Programs
                      </button>

                      <div className="mt-4">
  {active === "academia" ? (
    <a
      href="/brochures/academia-brochure.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-full bg-[#D9A441] px-5 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-white"
    >
      View Brochure
    </a>
  ) : (
    <button
      disabled
      className="inline-flex cursor-not-allowed rounded-full bg-white/30 px-5 py-2.5 text-sm font-semibold text-white"
    >
      Brochure Coming Soon
    </button>
  )}
</div>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-3">
                      {programs[active].map((program) => (
                        <div
                          key={program.title}
                          className="rounded-[1.5rem] border border-[#2A4A9B] bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                          <h4 className="text-base font-bold uppercase tracking-wide text-[#152B68]">
                            {program.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-gray-600">
                            {program.desc}
                          </p>

                          <ul className="mt-4 space-y-2">
                            {program.items.map((item) => (
                              <li
                                key={item}
                                className="flex gap-2 text-sm leading-6 text-[#152B68]"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}