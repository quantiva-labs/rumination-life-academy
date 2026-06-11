import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      );

      setStatus("Thank you. We have received your enquiry.");
      form.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-[#F8F4E8] px-6 py-14">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT CONTENT */}
        <div className="relative overflow-hidden bg-[#081B4B] px-8 py-10 text-white md:px-10">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#76B82A]/20 blur-3xl" />
          </div>

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">
              Begin Your Transformation
            </p>

            <div className="mt-4 h-[2px] w-14 bg-cyan-300" />

            <h2 className="mt-8 max-w-md text-4xl font-extrabold leading-tight md:text-5xl">
              Change is one conversation away.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/85">
              Whether you are seeking personal growth, empowering learners, or
              building stronger organisations, meaningful transformation begins
              with a single dialogue.
            </p>

            <div className="mt-9 space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#76B82A]">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white">
                    Chennai, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#76B82A]">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Email
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white">
                    subha@ruminationlifeacademy.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#76B82A]">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Phone
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white">
                    +91 8778367708
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-7 md:p-9">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#081B4B]">
                Full Name
              </label>
              <input
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#152B68]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#081B4B]">
                Organisation
              </label>
              <input
                name="organisation"
                placeholder="Enter your organisation"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#152B68]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#081B4B]">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#152B68]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#081B4B]">
                Phone Number
              </label>
              <input
                name="phone"
                required
                placeholder="Enter your phone"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#152B68]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1.5 block text-xs font-bold text-[#081B4B]">
                Looking For
              </label>
              <select
                name="looking_for"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-[#152B68]"
              >
                <option value="">Select an option</option>
                <option>Individual Programs</option>
                <option>Academia Programs</option>
                <option>Corporate Programs</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-1.5 block text-xs font-bold text-[#081B4B]">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Write your message here..."
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#152B68]"
              />
            </div>
          </div>

          <input
            type="hidden"
            name="to_email"
            value="subha@ruminationlifeacademy.com"
          />

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[#76B82A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#5f9f20]"
          >
            Start the Conversation →
          </button>

          {status && (
            <p className="mt-4 text-center text-sm font-semibold text-[#152B68]">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}