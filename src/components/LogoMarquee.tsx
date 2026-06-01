const logos = [
    { name: "SRM University", short: "SRM", color: "from-red-500 to-orange-500" },
    { name: "VIT University", short: "VIT", color: "from-blue-600 to-indigo-600" },
    { name: "Infosys", short: "INFOSYS", color: "from-sky-500 to-blue-600" },
    { name: "Wipro", short: "WIPRO", color: "from-purple-500 to-pink-500" },
    { name: "NTT DATA", short: "NTT DATA", color: "from-blue-700 to-cyan-600" },
    { name: "TCS", short: "TCS", color: "from-violet-600 to-blue-600" },
  ];
  
  export default function LogoMarquee() {
    return (
      <section className="bg-white border-y border-slate-200 py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-7">
          <p className="text-sm font-black text-slate-500 tracking-[0.2em] uppercase">
            Trusted by learners and partner communities
          </p>
        </div>
  
        <div className="relative">
          <div className="flex items-center gap-8 w-max animate-[marquee_30s_linear_infinite] px-6">
          {[...logos, ...logos].map((item, index) => (
  <div
    key={`${item.name}-${index}`}
    className="min-w-[220px] flex items-center justify-center"
  >
    <div
      className={`text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r ${item.color} bg-clip-text text-transparent hover:scale-110 transition duration-300`}
    >
      {item.short}
    </div>
  </div>
))}
          </div>
        </div>
  
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </section>
    );
  }