import Projects from "../components/cards/Projects";
import HeaderTop from "../components/contact components/header top/HeaderTop";

export default function project() {
  return (
    <div>
      <HeaderTop />
      <div className="projects">
        <Projects
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?"
          status="1hr"
          title="PROJECT 1"
          img="https://almusaddiq.com/wp-content/uploads/2021/01/4-770x497.jpg"
          avatar="https://i.imgur.com/7D7I6dI.png"
        />
        <Projects
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?"
          status="5hr"
          title="PROJECT 2"
          img="https://almusaddiq.com/wp-content/uploads/2021/01/4-770x497.jpg"
          avatar="https://i.imgur.com/sjLMNDM.png"
        />
        <Projects
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?"
          status="8hr"
          title="PROJECT 3"
          img="https://almusaddiq.com/wp-content/uploads/2021/01/4-770x497.jpg"
          avatar="https://i.imgur.com/2DhmtJ4.jpg"
        />
      </div>
    </div>
  );
}
