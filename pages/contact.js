import ContactForm from "../components/contact components/contact form/ContactForm";
import GetInTouch from "../components/contact components/get in touch/GetInTouch";
import HeaderTop from "../components/contact components/header top/HeaderTop";
import Hero from "../components/hero/Hero.jsx";

export default function contact() {
  return (
    <div>
      <HeaderTop />
      <Hero
        name="contact us"
        description=" Huge number of propreties availabe here for buy and sell, also
                  you can find here co-living property"
        title="Contact Information"
      />
      <GetInTouch />
      <ContactForm />
    </div>
  );
}
