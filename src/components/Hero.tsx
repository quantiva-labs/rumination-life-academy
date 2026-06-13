import { Eye, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#152B68] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
        <div>
          <div className="flex items-center gap-6 mb-8">
            <p className="text-4xl lg:text-6xl italic font-serif font-semibold text-white">
              Rumination
            </p>

            <div className="w-[2px] h-14 bg-[#4DB7E5]" />

            <h1 className="text-2xl lg:text-1xl font-extrabold leading-tight">
              Behind Every
              <span className="block">Transformation</span>
            </h1>
          </div>

          <p className="text-white/85 leading-7 max-w-xl">
            Excellence already lives within. Deeper than any doubt. Stronger
            than any setback.
          </p>

          <p className="text-white/85 leading-7 max-w-xl mt-5">
            Awareness is what awakens it. The right process is what sustains it.
          </p>

          <p className="text-white/85 leading-7 max-w-xl mt-5">
            This is where Rumination comes in, quietly guiding change from the
            inside out.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://wa.me/918778367708"
              
              className="inline-flex items-center gap-2 rounded-full bg-[#4DB7E5] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#36A9DC] hover:scale-105"
            >
              <MessageCircle size={18} />
              Start the Conversation
            </a>

            <a
  href="/academia-brochure.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-[#4DB7E5] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#36A9DC] hover:scale-105"
>
  <Eye size={18} />
  View Brochure
</a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-[580px]">
            <div className="rounded-[28px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.35)] border border-white/10 bg-white/5 backdrop-blur-sm">
              <img
                src="/hero-academy.png"
                alt="Rumination Life Academy"
                className="w-full h-[350px] lg:h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[85px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C260,90 520,80 760,55 C1000,30 1220,35 1440,75 L1440,120 L0,120 Z"
            fill="#4DB7E5"
          />

          <path
            d="M0,65 C260,105 520,95 760,75 C1020,55 1230,55 1440,92 L1440,120 L0,120 Z"
            fill="#DDF5FF"
          />
        </svg>
      </div>
    </section>
  );
}