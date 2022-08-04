import AboutUs from "../components/index components/about us/AboutUs";
import AdvanceSearchBar from "../components/index components/advance search bar/AdvanceSearchBar";
import FeaturedProducts from "../components/index components/featured products/FeaturedProducts";
import Hero from "../components/index components/hero/Hero";
import PopularProperties from "../components/cards/PopularProperties";
import Video from "../components/index components/video/Video";
import ExploreCities from "../components/index components/explore cities/ExploreCities";
import TestimonialCarousal from "../components/index components/testimonial carousal/TestimonialCarousal";
import Brand from "../components/index components/brand/Brand";
import Team from "../components/index components/team/Team";
import Blog from "../components/index components/blog/Blog";

export default function Home() {
  return (
    <div>
      <Hero />
      <AdvanceSearchBar />
      <PopularProperties />
      <AboutUs />
      <FeaturedProducts />
      <Video />
      <ExploreCities />
      <TestimonialCarousal />
      <Brand />
      <Team />
      <Blog />
    </div>
  );
}
