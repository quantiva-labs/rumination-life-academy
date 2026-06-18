import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative h-screen overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/hero-academy.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D]/94 via-[#071A3D]/70 to-transparent" />

      <div className="nebula-glow" />
      <div className="cosmic-dust" />
      <div className="shooting-star" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8 lg:px-16">
        <div className="max-w-[540px]">
          <div className="flex items-center gap-5">
            <h1 className="font-serif text-4xl font-bold italic tracking-wide lg:text-5xl">
              Rumination
            </h1>

            <div className="h-12 w-[2px] bg-[#4DB7E5]" />

            <div className="text-xl font-bold leading-tight lg:text-2xl">
              <div>Behind Every</div>
              <div>Transformation</div>
            </div>
          </div>

          <div className="mt-7 mb-8 h-[2px] w-56 bg-gradient-to-r from-[#D8A53F] to-transparent" />

          <div className="space-y-7 text-lg leading-relaxed text-white/90">
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
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#2CA8F7] to-[#125ED4] px-7 py-3 text-lg font-medium shadow-lg transition-all duration-300 hover:scale-105"
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