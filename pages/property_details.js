import Hero from "../components/hero/Hero.jsx";
import HeaderTop from "../components/contact components/header top/HeaderTop";
import Popular_Property from "../components/property_details components/popular property/Popular_Property";
import Brand from "../components/index components/brand/Brand";

export default function property_details() {
  return (
    <div>
      <HeaderTop />
      <Hero
        name="Our Properties"
        description=" Huge number of propreties availabe here for buy and sell
                  also you can find here co-living property as you like"
        title="Properties Details"
      />
      <Popular_Property />
      <Brand />
    </div>
  );
}
