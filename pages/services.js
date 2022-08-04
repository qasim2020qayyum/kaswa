import About_US from "../components/services/about us/About_US";
import Team from "../components/about components/team/Team";
import Provided_Services from "../components/services/provided services/Provided_Services";
import Hero from "../components/hero/Hero.jsx";
import Brand from "../components/index components/brand/Brand";
import HeaderTop from "../components/contact components/header top/HeaderTop";

function services() {
  return (
    <div>
      <HeaderTop />
      <Hero
        name="Our Services"
        description="Huge number of propreties availabe here for buy and sell
              also you can find here co-living property as you like"
        title="Services we Provide"
      />
      <About_US />
      <Provided_Services />
      <Team />
      <Brand />
    </div>
  );
}

export default services;
