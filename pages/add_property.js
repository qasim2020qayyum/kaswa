import Hero from "../components/hero/Hero.jsx";
import HeaderTop from "../components/contact components/header top/HeaderTop";
import Agency_Form from "../components/add properties/agency form/Agency_Form";
import Property_Section from "../components/add properties/property section/Property_Section";

function Add_property() {
  return (
    <div>
      <HeaderTop />
      <Hero
        name="Property ADD"
        description="Huge number of propreties availabe here for buy and sell
             also you can find here co-living property as you like"
        title=" Add Property"
      />
      <Agency_Form />
      <Property_Section />
    </div>
  );
}

export default Add_property;
