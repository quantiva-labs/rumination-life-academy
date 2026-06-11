export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Rumination Life Academy"
              className="h-14 w-auto"
            />

            <div>
              <h3 className="font-serif text-2xl font-bold tracking-wide text-white whitespace-nowrap">
                Rumination Life Academy
              </h3>

              <p className="ml-[160px] mt-1 text-[10px] tracking-[0.25em] text-[#4DB7E5]">
                Where Change Happens
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col items-center gap-2 text-center text-xs text-gray-500 md:flex-row md:justify-between">
            <p>© 2026 Rumination Life Academy. All Rights Reserved.</p>

            <p>
              Powered by
              <span className="ml-1 text-gray-300">
                Rumination Transformation Engine™
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}