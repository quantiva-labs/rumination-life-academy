import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeTransformPrograms from "./components/WhoWeTransformPrograms";
import RuminationMethod from "./components/RuminationMethod";
import Testimonials from "./components/Testimonials";
import AboutFounder from "./components/AboutFounder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
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