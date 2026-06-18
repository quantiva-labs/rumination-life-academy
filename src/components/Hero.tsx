import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-contain bg-right bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/hero/galaxy-hero.png')",
        backgroundColor: "#020B25",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#020B25]/70 via-[#020B25]/25 to-transparent" />

      {/* ROTATING GALAXY */}
      <div className="galaxy-spin pointer-events-none absolute right-[7%] top-[8%] h-[560px] w-[560px] rounded-full opacity-90">
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#1E90FF_55deg,transparent_120deg,#9D4EDD_180deg,transparent_250deg,#F4D28A_310deg,transparent_360deg)] blur-2xl" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-2xl" />
      </div>

      {/* MOVING COSMIC CLOUDS */}
      <div className="cosmic-pulse pointer-events-none absolute right-[16%] top-[28%] h-[300px] w-[300px] rounded-full bg-[#4DB7E5]/35 blur-[70px]" />

      <div className="cosmic-float pointer-events-none absolute right-[2%] bottom-[10%] h-[460px] w-[460px] rounded-full bg-[#9D4EDD]/30 blur-[100px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8 lg:px-16">
        <div className="max-w-[560px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <h1 className="font-serif text-5xl font-bold italic tracking-wide text-white drop-shadow-xl lg:text-7xl">
              Rumination
            </h1>

            <div className="hidden h-20 w-[2px] bg-[#D8A53F] sm:block" />

            <div className="text-2xl font-bold leading-tight text-[#F4D28A] drop-shadow-lg lg:text-3xl">
              <div>Behind Every</div>
              <div>Transformation</div>
            </div>
          </div>

          <div className="mt-8 mb-10 h-[2px] w-72 bg-gradient-to-r from-[#D8A53F] to-transparent" />

          <div className="space-y-7 text-xl leading-relaxed text-white/95">
            <p>
              Excellence already lives within.
              <br />
              Deeper than any doubt. Stronger than any setback.
            </p>

            <div className="h-[1px] w-10 bg-[#D8A53F]" />

            <p>
              Awareness is what awakens it.
              <br />
              The right process is what sustains it.
            </p>

            <div className="h-[1px] w-10 bg-[#D8A53F]" />

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
            className="mt-12 inline-flex items-center gap-4 rounded-full border border-[#F4D28A] bg-[#020B25]/45 px-8 py-4 text-lg font-semibold text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#F4D28A] hover:text-[#020B25]"
          >
            <MessageCircle className="h-7 w-7 text-[#25D366]" />
            Start the Conversation
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>

      <style>{`
        .galaxy-spin {
          animation: galaxySpin 18s linear infinite;
        }

        .cosmic-pulse {
          animation: cosmicPulse 5s ease-in-out infinite;
        }

        .cosmic-float {
          animation: cosmicFloat 8s ease-in-out infinite;
        }

        @keyframes galaxySpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes cosmicPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.95;
          }
        }

        @keyframes cosmicFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-35px) translateX(-20px);
          }
        }
      `}</style>
    </section>
  );
}