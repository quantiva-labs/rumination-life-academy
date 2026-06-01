export default function CTA() {
  return (
    <section id="contact" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[28px] bg-[#081B4B] text-white px-8 py-6 lg:px-10 lg:py-7 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left */}
            <div>
              <p className="text-xs font-black tracking-[0.25em] uppercase text-emerald-300 mb-2">
                Begin Your Journey
              </p>

              <h2 className="text-2xl lg:text-3xl font-black">
                Your Next Level Already Exists.
              </h2>

              <p className="text-white/70 mt-2">
                Awareness Is The Beginning.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+918778367708"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400 text-[#081B4B] font-bold hover:scale-105 transition"
              >
                Schedule Discovery Call
              </a>

              <a
                href="https://wa.me/918778367708"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition font-semibold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}