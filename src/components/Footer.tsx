export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Column 1 */}
          <div>
            <div className="flex items-start gap-3">

  <img
    src="/logo.png"
    alt="Rumination"
    className="mt-1 h-8 w-auto"
  />

  <div>

    <h2 className="text-xl font-bold leading-none">
      Rumination Life Academy
    </h2>

    <p className="ml-[92px] mt-1 text-xs tracking-wide text-gray-400">
      Where Change Happens
    </p>

  </div>

</div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-400">
              Programs
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Individual</li>
              <li>Academia</li>
              <li>Corporate</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-2 text-sm text-gray-300">

            <div className="flex items-center gap-2">
              <span>☎</span>
              <span>+91 87783 67708</span>
            </div>

            <div className="flex items-center gap-2">
              <span>💬</span>
              <span>+91 87783 67708</span>
            </div>

            <div className="flex items-center gap-2">
              <span>✉</span>
              <span>subha@ruminationlifeacademy.com</span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="/social/linkedin.png"
                alt="LinkedIn"
                className="h-4 w-4"
              />

              <a
                href="https://www.linkedin.com/in/rumination-life-academy-subha-nlp-a64768238/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Chennai, India</span>
            </div>

          </div>

        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-gray-500 md:flex-row md:justify-between">

          <p>
            © 2026 Rumination Life Academy
          </p>

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