import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeTransformPrograms from "./components/WhoWeTransformPrograms";
import RuminationMethod from "./components/RuminationMethod";
import Testimonials from "./components/Testimonials";
import AboutFounder from "./components/AboutFounder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function BrochureView() {
  const pages = Array.from(
    { length: 16 },
    (_, index) => `/brochures/academia/page-${index + 1}.jpg`
  );

  return (
    <div
      className="min-h-screen bg-[#F8F4E8] px-4 py-6"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="mx-auto max-w-5xl">
        <div className="sticky top-0 z-10 mb-6 flex items-center justify-between bg-[#F8F4E8]/95 py-4 backdrop-blur-md">
          <h1 className="font-serif text-2xl font-bold text-[#152B68]">
            Academia Brochure
          </h1>

          <a
            href="/"
            className="rounded-full bg-[#152B68] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1E3A8A]"
          >
            ← Back to Home
          </a>
        </div>

        <div className="space-y-8">
          {pages.map((page, index) => (
            <img
              key={page}
              src={page}
              alt={`Academia Brochure Page ${index + 1}`}
              className="w-full rounded-2xl bg-white shadow-xl"
              draggable="false"
              loading="lazy"
            />
          ))}
        </div>
      </div>
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
    <div className="overflow-x-hidden bg-white">
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