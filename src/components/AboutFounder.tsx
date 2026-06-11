import { useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  description: string;
};

const values = [
  { title: "Authenticity", text: "We meet you as you are, honestly." },
  { title: "Commitment", text: "We stay with you through the journey." },
  { title: "Congruence", text: "We align belief, behaviour, and purpose." },
];

const academicTeam: TeamMember[] = [
  {
    name: "Subha Vijayaraj",
    role: "Founder - Master NLP Practitioner & Life Coach",
    image: "/Subha alternative(1).JPG",
    linkedin:
      "https://www.linkedin.com/in/rumination-life-academy-subha-nlp-a64768238/?skipRedirect=true",
    description:
      "Subha Vijayaraj, the Founder of Rumination Life Academy, brings over a decade of global experience in NLP, behavioural transformation, and human capability development. She entered the world of transformation driven by a simple conviction, that people are far more capable than their circumstances or conditioning allow them to believe.\n\nWhat began as a thought about change gradually grew into a transformative ecosystem, enabling meaningful progression across individuals, academic institutions, and organisations. Having worked with over 40,000 people across 50+ organisations, Subha helps people break through what holds them back and step into clarity, capability, and conscious progression.\n\nIn her current role, she leads Rumination and its team of facilitators, coaches, and consultants, designing experiences that go beyond information delivery to awaken thinking, challenge limitation, and build lasting behavioural change. Her approach is rooted in experiential learning, reflective practice, and human psychology, bridging the gaps between potential and performance, awareness and execution, and identity and professional evolution.\n\nSubha believes transformation is never accidental. It begins the moment a person consciously takes ownership of their learning, decisions, and growth.",
  },
  {
    name: "Narayanan Sundaresan",
    role: "Strategic Advisor",
    image: "/narayanan(1).jpeg",
    linkedin: "https://www.linkedin.com/in/narayanan-sundaresan-9163072/",
    description:
      "Narayanan Sundaresan brings more than a decade of global leadership experience spanning technology, business strategy, and organizational transformation. Having held senior executive leadership positions, including serving as Chief Information Officer, he is recognized for his ability to align strategic vision with operational execution, build high-performing teams, and deliver sustainable business outcomes.\n\nAt Rumination Life Academy, Narayanan leads strategic planning and growth initiatives, helping shape the academy’s long-term vision while expanding its impact across individuals, educational institutions, and organizations. He plays a pivotal role in developing the systems, partnerships, and scalable frameworks that support Rumination’s mission of conscious human transformation and lifelong growth.\n\nWith academic and professional experience gained through studies in the United States at renowned institutions, including the University of Minnesota and Harvard University, Narayanan brings a global perspective to leadership, innovation, and organizational development. His unique ability to bridge strategy, technology, and human potential enables Rumination Life Academy to pursue ambitious growth while maintaining a strong foundation of purpose, excellence, and sustainability.",
  },
  {
    name: "Jayakumar Aravindhan",
    role: "Chief Mentor",
    image: "/arawindhan(1).jpg",
    linkedin:
      "https://www.linkedin.com/in/jayakumar-arawindhan-b1a056124/?skipRedirect=true",
    description:
      "Aravindhan brings over twenty years of leadership in the field of education, as a visionary and institution builder. As the mind behind the Achariya group of world class institutions, he has shaped future focused learning ecosystems and pioneered innovative frameworks that nurture the mind, body, and spirit of every learner. His work stands at the intersection of education and innovation, marked by a rare ability to turn bold ideas into lasting institutions.\n\nAs Chief Mentor of Rumination Life Academy, Aravindhan guides the academy's vision, philosophy, and direction. He brings deep insight into how learning truly transforms people, helping Rumination design frameworks that move beyond information into real capability, identity, and growth. His mentorship strengthens both the depth of Rumination's thinking and the scale of its ambition.\n\nA leader who builds people as much as institutions, Aravindhan grounds Rumination in a simple conviction, that education must prepare people not just for exams or jobs, but for life itself, exactly the spirit at the heart of everything Rumination sets out to do.",
  },
  {
    name: "Dr. Rashid Gazzali",
    role: "Chief Academic and Management Consultant",
    image: "/rashid-gazzali.jpg",
    linkedin: "https://www.linkedin.com/in/dr-rashid-gazzali-5a54225b/",
    description:
      "Dr. Rashid Gazzali brings over a decade of global experience as an educationist, corporate consultant, and international trainer, with work spanning more than ten countries. As the creator of the PRP Theory of Excellence, built on the dimensions of Personal, Relationship, and Professional growth, he is known for guiding thousands of individuals and organisations toward meaningful transformation across both academia and industry.\n\nAt Rumination, Dr. Rashid strengthens the academy's approach to leadership and institutional transformation, shaping how it serves educators, leaders, and organisations and helping design programs that create real and lasting change. His rare fluency across the educational and corporate worlds helps Rumination bridge the two with clarity and purpose, keeping its work relevant to real institutions and real workplaces.\n\nHis belief that true excellence is personal, relational, and professional aligns naturally with Rumination's vision of conscious human transformation, helping the academy grow with both depth and direction.",
  },
];

const corporateTeam: TeamMember[] = [
  {
    name: "Mr. Vijayaraj P",
    role: "Legal Head",
    image: "/vijayaraj.jpg",
    linkedin: "#",
    description:
       "Vijayaraj brings over 25 years of distinguished experience with a strong foundation in the legal domain. His deep expertise in law, compliance, and governance adds a rare layer of credibility and integrity to everything we do. Over the years, he has earned a reputation for sound judgment, ethical practice, and trusted counsel. His insight ensures that our programs and partnerships are guided by professionalism and strong values. With his guidance, the organisation stands on a foundation of trust, discipline, and lasting excellence."
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#0A66C2]">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.91 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function ValueAnimation({ activeValue }: { activeValue: number }) {
  const graphics = [
    {
      bg: "bg-[#f35f6f]",
      title: "Authenticity",
      scene: (
        <>
          <div className="absolute left-[42%] top-[42%] h-20 w-28 rounded-t-full border-4 border-white/80" />
          <div className="absolute left-[48%] top-[36%] h-10 w-10 rounded-full bg-white" />
          <div className="absolute left-[41%] top-[58%] h-2 w-36 bg-white/80" />
          <div className="absolute left-[37%] top-[52%] h-12 w-16 rounded-md border-4 border-white/80" />
          <div className="absolute left-[55%] top-[26%] animate-bounce text-4xl">♡</div>
        </>
      ),
    },
    {
      bg: "bg-[#f6b744]",
      title: "Commitment",
      scene: (
        <>
          <div className="absolute left-[30%] top-[58%] h-3 w-56 bg-white/80" />
          <div className="absolute left-[32%] top-[43%] h-16 w-16 animate-pulse rounded-full bg-white" />
          <div className="absolute right-[28%] top-[43%] h-16 w-16 rounded-full border-4 border-white" />
          <div className="absolute left-[45%] top-[35%] h-20 w-20 rotate-45 border-4 border-white/80" />
        </>
      ),
    },
    {
      bg: "bg-[#5fa8d3]",
      title: "Congruence",
      scene: (
        <>
          <div className="absolute left-[28%] top-[38%] h-24 w-24 animate-pulse rounded-full border-4 border-white" />
          <div className="absolute left-[45%] top-[38%] h-24 w-24 rounded-full border-4 border-white" />
          <div className="absolute left-[62%] top-[38%] h-24 w-24 rounded-full border-4 border-white" />
          <div className="absolute left-[48%] top-[48%] h-4 w-4 rounded-full bg-white" />
          <div className="absolute left-[65%] top-[48%] h-4 w-4 rounded-full bg-white" />
        </>
      ),
    },
  ];

  const current = graphics[activeValue];

  return (
    <div
      className={`relative h-[300px] overflow-hidden rounded-none ${current.bg} transition-all duration-500`}
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white,_transparent_60%)]" />

      <div className="absolute left-8 top-8 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
        {current.title}
      </div>

      {current.scene}

      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  );
}

export default function AboutFounder() {
  const [activeValue, setActiveValue] = useState(0);
  const [activeTab, setActiveTab] = useState<"academic" | "corporate">(
    "academic"
  );
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team = activeTab === "academic" ? academicTeam : corporateTeam;

  return (
    <section id="about" className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12 overflow-hidden bg-slate-100 shadow-sm">
          <img
            src="/about-rumination.png"
            alt="Where change happens"
            className="h-[320px] w-full object-cover lg:h-[430px]"
          />
        </div>

        <div className="mx-auto mb-20 max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#1d4f91]">
            About Us
          </p>
          <p className="text-lg leading-8 text-slate-700 lg:text-xl lg:leading-9">
            We began with a simple belief that human potential is far greater
            than human conditioning. And we&apos;ve never strayed from it. Our
            philosophy is clear. every transformation journey begins with
            awareness, and progresses through identity, capability, and
            meaningful evolution. But we don&apos;t stop at insight. As people
            grow, so do we — deepening how we help individuals, academia and
            organisations move from unconscious patterns into conscious, lasting
            change.
          </p>
        </div>

        <div className="mb-20 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#1d4f91]">
              Who We Are
            </p>
            <p className="text-lg leading-8 text-slate-700">
              At Rumination Life Academy, we help people understand the inner
              operating system behind their behaviour and growth. For more than
              a decade, through NLP-based transformative learning, behavioural
              insight and experiential journeys, we&apos;ve helped over 25,000
              individuals, students and professionals across academia and
              organisations turn awareness into lasting, deliberate change.
            </p>
          </div>

          <div className="group overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-sm cursor-pointer">
  <img
    src="/Who we are OPtion 1.jpeg"
    alt="Rumination learning journeys"
    className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
  />
</div>
        </div>

        <div className="mb-20 grid items-center gap-10 lg:grid-cols-2">
         <div className="group overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-sm cursor-pointer">
  <img
    src="/vision.JPG"
    alt="Rumination vision"
    className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
  />
</div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#1d4f91]">
              Our Vision
            </p>
            <p className="text-lg leading-8 text-slate-700 lg:text-xl lg:leading-9">
              To create transformative ecosystems that elevate human potential,
              conscious evolution, and purposeful living.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="mb-20">
          <div className="mb-10 text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#1d4f91]">
              Our Values
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-2">
              {values.map((item, index) => (
                <div key={item.title}>
                  <button
                    onClick={() => setActiveValue(index)}
                    className={`flex w-full items-center justify-between border-b border-slate-200 py-5 text-left transition ${
                      activeValue === index
                        ? "text-[#1d4f91]"
                        : "text-slate-700"
                    }`}
                  >
                    <span className="text-xl font-semibold">{item.title}</span>
                    <span className="text-2xl">
                      {activeValue === index ? "−" : "+"}
                    </span>
                  </button>

                  {activeValue === index && (
                    <p className="py-4 text-base leading-7 text-slate-500">
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <ValueAnimation activeValue={activeValue} />
          </div>
        </div>

        {/* OUR PHILOSOPHY */}

<div className="relative left-1/2 mb-20 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-black px-12 py-20 text-white lg:px-24">

  {/* Globe Background */}
  <div className="absolute inset-0 opacity-[0.08]">
    <img
      src="/globe-bg.PNG"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="relative z-10">

    <h2 className="mb-8 text-center text-5xl font-bold tracking-tight lg:text-5xl">
      OUR PHILOSOPHY
    </h2>

    <p className="mx-auto mb-14 max-w-4xl text-center text-lg leading-10 text-gray-300">
      Every transformation journey begins with awareness and progresses
      through identity, capability, and meaningful evolution.
    </p>

    <div className="mx-auto mb-12 h-px max-w-6xl bg-white/10"></div>

    <div className="grid gap-12 md:grid-cols-3">

      {/* Stat 1 */}
      <div className="flex items-start gap-6">
        <div className="h-20 w-[3px] bg-red-600"></div>

        <div>
          <h3 className="text-2xl font-bold text-white">
            10+ Years
          </h3>

          <p className="mt-2 text-lg text-gray-400">
            Empowering Change
          </p>
        </div>
      </div>

      {/* Stat 2 */}
      <div className="flex items-start gap-6">
        <div className="h-20 w-[3px] bg-red-600"></div>

        <div>
          <h3 className="text-2xl font-bold text-white">
            50+ Organisations
          </h3>

          <p className="mt-3 text-lg text-gray-400">
            Trusted Us
          </p>
        </div>
      </div>

      {/* Stat 3 */}
      <div className="flex items-start gap-6">
        <div className="h-20 w-[3px] bg-red-600"></div>

        <div>
          <h3 className="text-3xl font-bold text-white">
            40,000+ People
          </h3>

          <p className="mt-3 text-lg text-gray-400">
            Transformed
          </p>
        </div>
      </div>

    </div>

  </div>

</div>
      </div>

      {/* TEAM */}
      <div className="bg-[#fbf6df] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-6 text-center text-[32px] font-bold tracking-tight text-slate-900 lg:text-[42px]">
            Meet our Team
          </h3>

          <div className="mb-8 flex justify-center">
            <div className="flex rounded-full bg-[#eef0f4] p-1">
              <button
                onClick={() => setActiveTab("academic")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                  activeTab === "academic"
                    ? "bg-black text-white"
                    : "text-slate-500"
                }`}
              >
                Academic
              </button>

              <button
                onClick={() => setActiveTab("corporate")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                  activeTab === "corporate"
                    ? "bg-black text-white"
                    : "text-slate-500"
                }`}
              >
                Corporate
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden border border-slate-300 bg-white"
              >
                <div className="h-[250px] overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="min-h-[120px] px-5 py-5">
                  <div className="mb-2 flex items-center gap-2">
                    <h4 className="text-xl font-bold text-slate-900">
                      {member.name}
                    </h4>

                    {member.linkedin !== "#" && (
  <a
    href={member.linkedin}
    target="_blank"
    rel="noreferrer"
    aria-label={`${member.name} LinkedIn`}
  >
    <LinkedInIcon />
  </a>
)}
                  </div>

                  <p className="text-base leading-6 text-slate-500">
                    {member.role}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedMember(member)}
                  className="w-full border-t border-slate-300 px-5 py-4 text-left text-base font-medium text-blue-700"
                >
                  Know More ↗
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="grid max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl lg:grid-cols-[0.4fr_1.6fr]">
            <div className="flex items-start justify-center bg-[#f8f8f8] p-8">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="h-[260px] w-[220px] object-cover object-top"
                />
              </div>
            </div>

            <div className="p-7 lg:p-9">
              <div className="mb-5 flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold text-slate-900">
                      {selectedMember.name}
                    </h3>
                    
                  </div>
                  <p className="mt-2 text-lg text-slate-500">
                    {selectedMember.role}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedMember(null)}
                  className="rounded-full bg-slate-100 px-4 py-2 text-xl font-bold text-slate-700"
                >
                  ×
                </button>
              </div>

              <div className="space-y-5">
                {selectedMember.description.split("\n\n").map((para) => (
                  <p key={para} className="text-base leading-8 text-slate-700">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}