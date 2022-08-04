import AboutUs from "../components/index components/about us/AboutUs";
import About from "../components/about components/about/About";
import Brand from "../components/index components/brand/Brand";
import HeroAbout from "../components/hero/HeroAbout";
import Service from "../components/about components/service/Service";
import TestimonialCarousal from "../components/index components/testimonial carousal/TestimonialCarousal";
import Team from "../components/about components/team/Team";

export default function about() {
  return (
    <div>
      <HeroAbout />
      <About />
      <Brand />
      <Service />
      <AboutUs />
      <TestimonialCarousal />
      <Team />
    </div>
  );
}
