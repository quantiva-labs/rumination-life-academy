export default function Footer() {
  return (
    <footer className="bg-[#040B16] text-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center">
          <h3 className="text-lg font-black">Rumination Life Academy</h3>

          <p className="text-emerald-300 text-sm mt-1">
            Where Change Happens
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-5 text-sm text-white/70">
            <a href="mailto:subha@ruminationlifeacademy.com">
              Email: subha@ruminationlifeacademy.com
            </a>

            <a href="tel:+918778367708">
              Phone: +91 87783 67708
            </a>

            <span>Chennai, India</span>

            <a href="#">LinkedIn</a>

            <a href="#">Instagram</a>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/40">
            © 2026 Rumination Life Academy. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}