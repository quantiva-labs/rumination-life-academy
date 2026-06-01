export default function AboutFounder() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          {/* LEFT */}
          <div>
            <p className="text-xs font-black tracking-[0.25em] uppercase text-emerald-600 mb-3">
              About Rumination Life Academy
            </p>

            <h2 className="text-3xl lg:text-5xl font-black text-blue-950 leading-tight mb-6">
              Human Potential Is Far Greater Than
              <span className="block text-emerald-600">
                Human Conditioning.
              </span>
            </h2>

            <p className="text-slate-600 leading-8 mb-6">
              We are more than what we think we are, yet most people
              live far below their true potential, awareness and capability.
            </p>

            <p className="text-slate-600 leading-8 mb-6">
              The patterns we repeat, the beliefs we carry and the way we think
              silently shape our behaviour, relationships, leadership,
              performance and direction in life.
            </p>

            <p className="text-slate-600 leading-8 mb-8">
              Through NLP-based transformative learning, behavioural insight,
              reflective awareness and experiential growth journeys,
              Rumination helps individuals, academia and organisations
              move beyond limitation and unlock sustainable excellence.
            </p>

            <div className="rounded-2xl bg-blue-950 text-white p-6">
              <p className="text-xl font-black">
                Decode the Inner System.
              </p>

              <p className="text-xl text-emerald-300 font-black mt-2">
                Transform the Outer Reality.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="bg-slate-50 border border-slate-200 rounded-[32px] p-8">
              <img
                src="/founder.jpg"
                alt="Subha Vijayaraj"
                className="w-44 h-44 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
              />

              <div className="text-center">
                <p className="text-xs font-black tracking-[0.25em] uppercase text-emerald-600 mb-3">
                  Founder
                </p>

                <h3 className="text-3xl font-black text-blue-950">
                  Subha Vijayaraj
                </h3>

                <p className="mt-3 text-emerald-600 font-semibold">
                  Transformation Facilitator | NLP Practitioner
                </p>

                <p className="mt-6 text-slate-600 leading-7">
                  Creating transformative learning experiences that unlock
                  human capability, leadership potential and conscious growth.
                </p>

                <button className="mt-8 px-6 py-3 rounded-xl bg-blue-950 text-white font-semibold hover:bg-blue-900 transition">
                  Meet The Team →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}