import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeTransformPrograms from "./components/WhoWeTransformPrograms";
import RuminationMethod from "./components/RuminationMethod";
import Testimonials from "./components/Testimonials";
import AboutFounder from "./components/AboutFounder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function BrochureView() {
  return (
    <div className="bg-[#F8F4E8]">
      <Navbar />

      <section className="min-h-screen px-6 pt-24 pb-10">
        <div className="mx-auto mb-5 flex max-w-6xl items-center justify-between">
          <h1 className="font-serif text-3xl font-bold text-[#152B68]">
            Academia Brochure
          </h1>

          <a
            href="/"
            className="rounded-full bg-[#152B68] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1E3A8A]"
          >
            ← Back to Home
          </a>
        </div>

        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-4 shadow-2xl">
          <iframe
            src="/brochures/academia-brochure.pdf#toolbar=0&navpanes=0&scrollbar=1"
            title="Academia Brochure"
            className="h-[80vh] w-full rounded-2xl"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function App() {
  const isBrochurePage =
    window.location.pathname === "/brochure-view";

  if (isBrochurePage) {
    return <BrochureView />;
  }

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeTransformPrograms />
      <RuminationMethod />
      <Testimonials />
      <AboutFounder />
      <Contact />
      <Footer />
    </div>
  );
}