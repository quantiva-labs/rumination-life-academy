import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020816] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020816] via-[#041226] to-[#071B2D]" />

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-sky-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Academy Name */}
            <div className="mb-8">
              <h3 className="text-lg lg:text-xl font-light tracking-wider text-white">
                RUMINATION
              </h3>

              <h4 className="text-base lg:text-lg font-semibold tracking-[0.25em] uppercase text-emerald-300">
                LIFE ACADEMY
              </h4>

              <div className="flex items-center gap-3 mt-3">
                <div className="h-px w-16 bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="h-px w-16 bg-amber-400" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-black leading-tight">
              Where Change
              <span className="block text-emerald-300">
                Happens
              </span>
            </h1>

            {/* Tagline */}
            <h2 className="mt-6 text-xl lg:text-2xl font-semibold leading-relaxed text-white/90">
              From Personal Growth
              <span className="block text-sky-300">
                to Professional Excellence.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base lg:text-lg leading-8 text-white/70 max-w-xl">
              Empowering individuals, educators and organisations through
              NLP-based transformative learning, behavioural insight and
              conscious human development.
              <br />
              <br />
              We help people decode their inner operating system, unlock
              potential, develop leadership capability and create meaningful,
              lasting transformation.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-sky-400 text-[#020816] font-bold shadow-lg hover:scale-105 transition duration-300">
                Schedule Discovery Call
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300">
                Explore Our Ecosystem
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <motion.img
              src="/hero-academy.png"
              alt="Rumination Life Academy"
              className="w-full max-w-[650px] object-contain"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
            />

            {/* Image Glow */}
            <div className="absolute inset-0 bg-sky-400/10 blur-[100px] rounded-full -z-10" />
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-12 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-emerald-300">
                10K+
              </h3>
              <p className="mt-2 text-white/60 text-sm">
                Learners Impacted
              </p>
            </div>

            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-sky-300">
                100+
              </h3>
              <p className="mt-2 text-white/60 text-sm">
                Programs Delivered
              </p>
            </div>

            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-amber-300">
                15+
              </h3>
              <p className="mt-2 text-white/60 text-sm">
                Years of Impact
              </p>
            </div>

            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-white">
                3
              </h3>
              <p className="mt-2 text-white/60 text-sm">
                Transformation Ecosystems
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-8 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-white/40">
            Decode The Inner System
          </p>

          <p className="mt-2 text-lg font-semibold text-emerald-300">
            Transform The Outer Reality
          </p>
        </div>
      </div>
    </section>
  );
}