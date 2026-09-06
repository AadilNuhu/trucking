import Hero from "@/components/Hero";
import Services from "@/components/Service";
import HowItWorks from "@/components/HowItWorks";
import Routes from "@/components/RouteSection";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Routes />
      <Testimonial />
    </div>
  );
}
