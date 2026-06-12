import { useState } from "react";

type ProgramKey = "individuals" | "academia" | "corporate";

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);

  const openProgram = (program: ProgramKey) => {
    window.dispatchEvent(
      new CustomEvent("open-program", { detail: program })
    );

    setOpen(null);

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
      <div className="mx-auto flex h-[62px] max-w-7xl items-center justify-between px-5">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Rumination Life Academy"
            className="h-[60px] w-[60px] object-contain"
          />

          <div className="leading-none">
            <h1
              style={{
                fontFamily: "Jost",
                fontWeight: 400,
                letterSpacing: "-0.5px",
              }}
              className="text-[30px]"
            >
              <span className="text-[#0B1D3A]">Rumination</span>
              <span className="text-[#4DB7E5]">Life</span>
              <span className="text-[#0B1D3A]">Academy</span>
            </h1>

            <div className="relative mt-1 h-5">
              <svg
                width="320"
                height="24"
                viewBox="0 0 320 24"
                className="absolute left-0 top-0"
              >
                <path
                  d="M10 12 C90 2, 220 2, 310 12"
                  stroke="#4DB7E5"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              <p
                style={{
                  fontFamily: "Jost",
                  fontWeight: 400,
                  letterSpacing: "4px",
                }}
                className="relative pt-[7px] text-center text-[10px] lowercase text-[#111111]"
              >
                where change happens
              </p>
            </div>
          </div>
        </a>

        {/* RIGHT NAV */}
        <nav className="hidden items-center gap-4 text-[13px] font-semibold tracking-wide text-[#111827] lg:flex">
          {/* COMPANY */}
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
                  onClick={() => setOpen(null)}
                  className="block rounded-lg px-4 py-2 text-[13px] hover:bg-[#F8F4E8] hover:text-[#1E3A8A]"
                >
                  About Us
                </a>
              </div>
            )}
          </div>

          {/* WHOM WE TRANSFORM */}
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

                <button
                  onClick={() => openProgram("individuals")}
                  className="block w-full rounded-lg px-4 py-2 text-left text-[13px] hover:bg-[#F8F4E8] hover:text-[#1E3A8A]"
                >
                  Individuals
                </button>

                <button
                  onClick={() => openProgram("academia")}
                  className="block w-full rounded-lg px-4 py-2 text-left text-[13px] hover:bg-[#F8F4E8] hover:text-[#1E3A8A]"
                >
                  Academia
                </button>

                <button
                  onClick={() => openProgram("corporate")}
                  className="block w-full rounded-lg px-4 py-2 text-left text-[13px] hover:bg-[#F8F4E8] hover:text-[#1E3A8A]"
                >
                  Corporate
                </button>
              </div>
            )}
          </div>

          {/* HOW WE TRANSFORM */}
          <a
            href="#method"
            className="py-4 hover:text-[#1E3A8A]"
          >
            How We Transform
          </a>

          {/* ASSESSMENTS */}
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
                    onClick={() => setOpen(null)}
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

          {/* CONTACT */}
          <a
            href="#contact"
            className="rounded-full bg-[#152B68] px-3 py-1.5 text-[13px] text-white transition hover:bg-[#1E3A8A]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}