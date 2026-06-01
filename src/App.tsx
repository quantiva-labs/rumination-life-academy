import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeTransform from "./components/WhoWeTransform";
import RuminationMethod from "./components/RuminationMethod";
import RuminationDifference from "./components/RuminationDifference";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import AboutFounder from "./components/AboutFounder";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeTransform />
      <RuminationMethod />
      <RuminationDifference />
      <Programs />
      <Testimonials />
      <AboutFounder />
      <CTA />
      <Footer />
    </div>
  );
}