import { AboutMePage } from "./components/aboutMeSection";
import { EducationSection } from "./components/educationSection";
import { HomeSection } from "./components/homeSection";
import { SkillSection } from "./components/skillSection";

export default function Home() {
  return (
    <div className=" flex flex-col gap-10">
      <section id="home" className="section">
        <HomeSection />
      </section>

      <section id="about" className="section">
        <AboutMePage />
      </section>
      <section id="ed" className="section">
        <EducationSection />
      </section>
      <section id="skill" className="section">
        <SkillSection />
      </section>
      <section id="exp" className="section">
        Experience
      </section>
      <section id="contact" className="section">
        Contact
      </section>
    </div>
  );
}
