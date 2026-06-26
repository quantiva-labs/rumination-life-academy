import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-[82%_center] text-white md:bg-center"
      style={{ backgroundImage: "url('/hero-academy.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D]/95 via-[#071A3D]/80 to-[#071A3D]/30 md:via-[#071A3D]/70 md:to-transparent" />

      <div className="nebula-glow" />
      <div className="cosmic-dust" />
      <div className="shooting-star" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-16 md:px-8 lg:px-16">
        <div className="max-w-[540px]">
          <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-5">
            <h1 className="font-serif text-4xl font-bold italic tracking-wide sm:text-5xl lg:text-5xl">
              Rumination
            </h1>

            <div className="hidden h-12 w-[2px] bg-[#4DB7E5] lg:block" />

            <div className="text-xl font-bold leading-tight text-white lg:text-2xl">
              <div>Behind Every</div>
              <div>Transformation</div>
            </div>
          </div>

          <div className="mt-6 mb-7 h-[2px] w-56 bg-gradient-to-r from-[#D8A53F] to-transparent" />

          <div className="space-y-6 text-base leading-relaxed text-white/90 sm:text-lg lg:text-lg">
            <p>
              Excellence already lives within.
              <br />
              Deeper than any doubt. Stronger than any setback.
            </p>

            <p>
              Awareness is what awakens it.
              <br />
              The right process is what sustains it.
            </p>

            <p>
              This is where Rumination comes in,
              <br />
              quietly guiding change from the inside out.
            </p>
          </div>

          <a
            href="https://wa.me/918778367708"
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#2CA8F7] to-[#125ED4] px-5 py-3 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 sm:px-7 sm:text-lg"
          >
            <MessageCircle className="h-6 w-6 text-[#25D366]" />
            Start the Conversation
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}