import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import MeetAstrologer from "./components/MeetAstrologer";
import Testimonials from "./components/Testimonials";
import LatestVideos from "./components/LatestVideos";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import HashRedirect from "./components/HashRedirect";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HashRedirect />
      <Hero />
      <Statistics />
      <Services />
      <WhyChooseUs />
      <MeetAstrologer />
      <Testimonials />
      <LatestVideos />
      <FAQ />
      <FinalCTA />
      <Contact />
    </div>
  );
}
