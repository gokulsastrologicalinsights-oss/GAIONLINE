import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import LatestVideos from "./components/LatestVideos";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Statistics />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <LatestVideos />
      <FAQ />
      <Contact />
    </div>
  );
}
