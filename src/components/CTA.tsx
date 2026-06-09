export default function CTA() {
  return (
    <section id="cta" className="bg-white py-10">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-[30px] bg-[#081B4B] px-8 py-10 text-white shadow-2xl lg:px-12 lg:py-12">

          {/* Very Light Globe Background */}
          <div className="absolute inset-0 opacity-[0.05]">
            <img
              src="/globe-bg.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative z-10 text-center">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
              BEGIN YOUR TRANSFORMATION
            </p>

            <h2 className="text-3xl font-black leading-tight lg:text-5xl">
              Change is one
              <br />
              conversation away.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80">
              Whether you are seeking personal growth,
              empowering learners, or building stronger organisations,
              meaningful transformation begins with a single dialogue.
            </p>

           
            

          </div>
        </div>
      </div>
    </section>
  );
}