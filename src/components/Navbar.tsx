export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 pt-4">
        <div className="h-20 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl flex items-center justify-between px-7">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Rumination Life Academy"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h1 className="text-xl font-black text-[#081B4B]">
                Rumination Life Academy
              </h1>
              <p className="text-xs font-bold text-slate-500">
                Where Change Happens
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-700">
            <a href="#home" className="hover:text-sky-600">Home</a>
            <a href="#transform" className="hover:text-sky-600">Who We Transform</a>
            <a href="#method" className="hover:text-sky-600">Method</a>
            <a href="#programs" className="hover:text-sky-600">Programs</a>
            <a href="#contact" className="hover:text-sky-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}