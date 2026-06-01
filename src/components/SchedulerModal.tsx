type SchedulerModalProps = {
    isOpen: boolean;
    onClose: () => void;
  };
  
  export default function SchedulerModal({
    isOpen,
    onClose,
  }: SchedulerModalProps) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-5">
        <div className="w-full max-w-3xl rounded-[28px] bg-white shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#081B4B] via-[#17124A] to-[#0B6B57] px-7 py-6 text-white">
            <button
              onClick={onClose}
              className="float-right text-white/70 hover:text-white text-2xl"
            >
              ×
            </button>
  
            <p className="text-xs font-black tracking-[0.25em] uppercase text-emerald-300 mb-3">
              Discovery Call
            </p>
  
            <h2 className="text-3xl font-black mb-3">
              Schedule Your Transformation Consultation
            </h2>
  
            <p className="text-white/70 leading-7 text-sm">
              Book a 30-minute discovery call to understand your goals and choose
              the right transformation pathway.
            </p>
          </div>
  
          <div className="p-7">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "Outlook Calendar Sync",
                "Microsoft Teams Meeting",
                "Email Confirmation",
                "Pre-Assessment Ready",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-4 flex items-center gap-3"
                >
                  <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black">
                    ✓
                  </span>
                  <p className="font-bold text-slate-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
  
            <a
              href="https://outlook.office365.com/book/RuminationLifeAcademy@yourdomain.com/"
              target="_blank"
              rel="noreferrer"
              className="block text-center rounded-full bg-blue-950 text-white font-black py-3 hover:bg-violet-700 transition"
            >
              Continue to Microsoft Bookings
            </a>
  
            <p className="mt-4 text-xs text-slate-500 leading-6 text-center">
              Replace this placeholder with your actual Microsoft Bookings link
              after setup.
            </p>
          </div>
        </div>
      </div>
    );
  }