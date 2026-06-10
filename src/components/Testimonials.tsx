import { useEffect, useState } from "react";

const stories = [
  {
    key: "SRMIST",
    logo: "/logos/srm.png",
    name: "Dr. N. Venkata Sastry",
    role: "Director - Career Centre",
    org: "SRMIST, Chennai",
    quote:
      "Rumination Life Academy brings an invaluable range of methods tailored to help students build the competencies required in today's competitive industry landscape.",
  },
  {
    key: "VIT",
    logo: "/logos/vit.png",
    name: "Prabhu Christopher",
    role: "Dean, Academic Staff College",
    org: "VIT, Vellore",
    quote:
      "Subha Vijayaraj delivered exceptional value to our Faculty Development Programme. Her rare blend of behavioural insight and facilitation mastery elevated our faculty's self-awareness and pedagogical impact.",
  },
  {
    key: "GURU NANAK",
    logo: "/logos/guru-nanak.jpg",
    name: "Mr. Manjith Singh Nayar",
    role: "General Secretary",
    org: "Guru Nanak College, Chennai",
    quote:
      "Rumination Life Academy's leadership programs integrate NLP with strategic depth, aligning leaders around a clear institutional vision while transforming how they think, decide and influence.",
  },
  {
    key: "TCS",
    logo: "/logos/tcs.jpg",
    name: "Corporate Partner",
    role: "Learning & Development",
    org: "Tata Consultancy Services",
    quote:
      "Rumination's experiential approach creates learning environments where people reflect, participate and translate awareness into practical workplace behaviours.",
  },
  {
    key: "INTEGRA",
    logo: "/logos/integra.png",
    name: "Vibin Raj",
    role: "Head, Learning and Development",
    org: "Integra Software Services Private Ltd, India",
    quote:
      "Partnering with Subha and Rumination Life Academy elevated our L&D outcomes. Her NLP anchored, experiential design creates genuine behavioural shifts and measurable capability growth.",
  },
  {
    key: "Pain du soleil ",
    logo: "/logos/pain du soleil.jpg",
    name: "Anbu Ravikumar",
    role: "Planning head, Pain du soleil",
    org: "Pain du soleil, Cormeilles en parisis, France",
    quote:
      "Working with Subha through NLP life coaching changed something deep within me. For years I carried doubt and a quiet confusion about where my life was heading. Subha helped me see myself clearly, dissolve the beliefs that were holding me back, and step into a confidence I didn't know I had. I walked in unsure, and walked out with clarity, direction, and a renewed sense of who I am.",
  },
  {
    key: "HCL",
    logo: "/logos/hcl.jpg",
    name: "Enterprise Learning Partner",
    role: "Corporate Learning",
    org: "HCL",
    quote:
      "Rumination brings together reflective learning, behavioural awareness and practical transformation to help professionals build confidence, communication and conscious performance.",
  },
];

export default function TestimonialsImpact() {
  const [active, setActive] = useState(0);
  const current = stories[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % stories.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          

          <h2 className="text-2xl lg:text-4xl font-bold text-[#05263B]">
            Partnering with Institutions and Organisations Shaping Human Potential
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#05263B] via-[#0F8B6F] to-[#B01886] mx-auto mt-4 mb-4" />

          
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-8 mb-8">
          {stories.map((story, index) => {
            const selected = active === index;

            return (
              <button
                key={story.key}
                onClick={() => setActive(index)}
                className="transition-all duration-500"
              >
                <img
                  src={story.logo}
                  alt={story.key}
                  className={`object-contain transition-all duration-500 ${
                    selected
                      ? "h-14 scale-110 opacity-100"
                      : "h-10 opacity-50 hover:opacity-80 hover:scale-105"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="relative rounded-[24px] border border-[#E2ECEE] bg-white p-6 lg:p-8 shadow-[0_16px_45px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="absolute top-4 right-6 text-[70px] text-[#0F8B6F]/5 font-serif">
            ”
          </div>

          <div className="grid lg:grid-cols-[48px_1fr] gap-4">
            <div className="text-[42px] leading-none text-[#0F8B6F] font-serif">
              “
            </div>

            <div>
              <img
                src={current.logo}
                alt={current.key}
                className="h-8 object-contain mb-4"
              />

              <p className="text-lg lg:text-xl leading-8 text-[#05263B] font-medium">
                {current.quote}
              </p>

              <div className="w-14 h-[2px] bg-[#0F8B6F] mt-5 mb-4" />

              <h3 className="text-lg font-extrabold text-[#05263B]">
                {current.name}
              </h3>

              <p className="mt-1 text-sm text-[#0F8B6F] font-bold">
                {current.role}
              </p>

              <p className="text-sm text-slate-500 mt-1">{current.org}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-5">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                active === index ? "w-7 bg-[#0F8B6F]" : "w-2.5 bg-[#B7DFE3]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}