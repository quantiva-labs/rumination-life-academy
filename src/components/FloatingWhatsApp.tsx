export default function FloatingWhatsApp() {
    return (
      <a
        href="https://wa.me/918778367708"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-3 text-white font-black shadow-2xl hover:bg-emerald-600 hover:scale-105 transition"
      >
        <span className="text-xl">☎</span>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    );
  }