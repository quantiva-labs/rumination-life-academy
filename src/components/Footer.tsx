export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          <div>
            <div className="flex items-start gap-3">
              <img
                src="/logo.svg"
                alt="Rumination Life Academy"
                className="h-12 w-auto"
              />

              <div>
                <h3 className="font-serif text-xl font-bold tracking-wide text-white whitespace-nowrap">
                  Rumination Life Academy
                </h3>

                <p className="ml-[130px] mt-1 text-xs tracking-wide text-gray-400">
  Where Change Happens
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-400">
              Programs
            </h3>

            <ul className="space-y-2 text-center text-sm text-gray-300">
              <li>Individual</li>
              <li>Academia</li>
              <li>Corporate</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-400">
              Contact
            </h3>

            <div className="flex items-center gap-5 text-xl text-gray-300">
              <a href="tel:+918778367708" aria-label="Call" className="hover:text-[#4DB7E5]">
                ☎
              </a>

              <a
                href="https://wa.me/918778367708"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#4DB7E5]"
              >
                💬
              </a>

              <a
                href="mailto:subha@ruminationlifeacademy.com"
                aria-label="Email"
                className="hover:text-[#4DB7E5]"
              >
                ✉
              </a>

              <a
                href="https://www.linkedin.com/in/rumination-life-academy-subha-nlp-a64768238/?skipRedirect=true"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#4DB7E5] text-base font-semibold"
              >
                in
              </a>

              <a
                href="https://maps.google.com/?q=Chennai, India"
                target="_blank"
                rel="noreferrer"
                aria-label="Location"
                className="hover:text-[#4DB7E5]"
              >
                📍
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-gray-500 md:flex-row md:justify-between">
          <p>© 2026 Rumination Life Academy</p>

          <p>
            Powered by
            <span className="ml-1 text-gray-300">
              Rumination Transformation Engine™
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}