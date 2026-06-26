import { useState } from "react";
import { Menu, X } from "lucide-react";

type ProgramKey = "individuals" | "academia" | "corporate";

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setOpen(null);
    setMobileOpen(false);
  };

  const openProgram = (program: ProgramKey) => {
    window.dispatchEvent(new CustomEvent("open-program", { detail: program }));

    closeAll();

    setTimeout(() => {
      document.getElementById("transform")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const toggleMenu = (menu: string) => {
    setOpen((current) => (current === menu ? null : menu));
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#F8F4E8]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-[62px] max-w-7xl items-center justify-between px-4 lg:px-5">
        {/* LOGO */}
        <a href="#home" onClick={closeAll} className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Rumination Life Academy"
            className="h-[46px] w-[46px] object-contain lg:h-[60px] lg:w-[60px]"
          />

          <div className="leading-none">
            <h1
              style={{
                fontFamily: "Jost",
                fontWeight: 400,
                letterSpacing: "-0.5px",
              }}
              className="text-[18px] sm:text-[22px] lg:text-[30px]"
            >
              <span className="text-[#0B1D3A]">Rumination</span>
              <span className="text-[#4DB7E5]">Life</span>
              <span className="text-[#0B1D3A]">Academy</span>
            </h1>

            <div className="relative mt-0.5 h-4 lg:mt-1 lg:h-5">
              <svg
                width="220"
                height="18"
                viewBox="0 0 320 24"
                className="absolute left-0 top-0 w-[190px] sm:w-[220px] lg:w-[320px]"
              >
                <path
                  d="M10 12 C90 2, 220 2, 310 12"
                  stroke="#6BA539"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              <p
                style={{
                  fontFamily: "Jost",
                  fontWeight: 500,
                  letterSpacing: "3px",
                }}
                className="relative pt-[7px] text-center text-[7px] lowercase text-[#111111] sm:text-[8px] lg:pt-[10px] lg:text-[10px]"
              >
                where change happens
              </p>
            </div>
          </div>
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#152B68] shadow-sm lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-4 text-[13px] font-semibold tracking-wide text-[#111827] lg:flex">
          <div className="relative">
            <button
              onClick={() => toggleMenu("company")}
              className="flex items-center gap-1 py-4 hover:text-[#1E3A8A]"
            >
              Company <span className="text-[10px]">▾</span>
            </button>

            {open === "company" && (
              <div className="absolute right-0 top-[48px] w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                <a
                  href="#about"
                  onClick={closeAll}
                  className="block rounded-lg px-4 py-2 text-[13px] hover:bg-[#F8F4E8] hover:text-[#1E3A8A]"
                >
                  About Us
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleMenu("transform")}
              className="flex items-center gap-1 py-4 hover:text-[#1E3A8A]"
            >
              Whom We Transform <span className="text-[10px]">▾</span>
            </button>

            {open === "transform" && (
              <div className="absolute right-0 top-[48px] w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
                  Programs
                </p>

                {(["individuals", "academia", "corporate"] as ProgramKey[]).map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => openProgram(item)}
                      className="block w-full rounded-lg px-4 py-2 text-left text-[13px] capitalize hover:bg-[#F8F4E8] hover:text-[#1E3A8A]"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          <a href="#method" className="py-4 hover:text-[#1E3A8A]">
            How We Transform
          </a>

          <div className="relative">
            <button
              onClick={() => toggleMenu("assessments")}
              className="flex items-center gap-1 py-4 hover:text-[#1E3A8A]"
            >
              Assessments <span className="text-[10px]">▾</span>
            </button>

            {open === "assessments" && (
              <div className="absolute right-0 top-[48px] w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                {[
                  "Individual Assessment",
                  "Academia Assessment",
                  "Corporate Assessment",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={closeAll}
                    className="flex items-center justify-between rounded-lg px-4 py-2 text-[13px] hover:bg-[#F8F4E8] hover:text-[#1E3A8A]"
                  >
                    {item}
                    <span className="rounded-full bg-[#F8F4E8] px-2 py-1 text-[9px] text-[#1E3A8A]">
                      Soon
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            onClick={closeAll}
            className="rounded-full bg-[#152B68] px-3 py-1.5 text-[13px] text-white transition hover:bg-[#1E3A8A]"
          >
            Contact
          </a>
        </nav>
      </div>

{/* MOBILE MENU */}
{mobileOpen && (
  <div className="border-t border-[#e7dfcc] bg-[#F8F4E8] px-4 pb-5 pt-3 lg:hidden">
    <div className="space-y-2 rounded-2xl bg-white p-3 shadow-xl">

      <a
        href="#about"
        onClick={closeAll}
        className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#152B68] hover:bg-[#F8F4E8]"
      >
        Company / About Us
      </a>

      <button
        onClick={() => toggleMenu("mobile-transform")}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[#152B68] hover:bg-[#F8F4E8]"
      >
        Whom We Transform
        <span>{open === "mobile-transform" ? "▴" : "▾"}</span>
      </button>

      {open === "mobile-transform" && (
        <div className="space-y-2 rounded-xl bg-[#F8F4E8] p-3">
          <button onClick={() => openProgram("individuals")} className="block w-full rounded-lg bg-white px-3 py-2 text-left text-sm font-semibold">
            Individuals
          </button>
          <button onClick={() => openProgram("academia")} className="block w-full rounded-lg bg-white px-3 py-2 text-left text-sm font-semibold">
            Academia
          </button>
          <button onClick={() => openProgram("corporate")} className="block w-full rounded-lg bg-white px-3 py-2 text-left text-sm font-semibold">
            Corporate
          </button>
        </div>
      )}

      <a
        href="#method"
        onClick={closeAll}
        className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#152B68] hover:bg-[#F8F4E8]"
      >
        How We Transform
      </a>

      <button
        onClick={() => toggleMenu("mobile-assessments")}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[#152B68] hover:bg-[#F8F4E8]"
      >
        Assessments
        <span>{open === "mobile-assessments" ? "▴" : "▾"}</span>
      </button>

      {open === "mobile-assessments" && (
        <div className="space-y-2 rounded-xl bg-[#F8F4E8] p-3">
          {[
            "Individual Assessment",
            "Academia Assessment",
            "Corporate Assessment",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-sm font-semibold text-[#111827]"
            >
              {item}
              <span className="rounded-full bg-[#F8F4E8] px-2 py-1 text-[9px] text-[#1E3A8A]">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      )}

      <a
        href="#contact"
        onClick={closeAll}
        className="block rounded-full bg-[#152B68] px-4 py-3 text-center text-sm font-semibold text-white"
      >
        Contact
      </a>
    </div>
  </div>
)}
    </header>
  );
}