import { AboutMePage } from "./components/aboutMeSection";
import { EducationSection } from "./components/educationSection";
import { HomeSection } from "./components/homeSection";
import { SkillSection } from "./components/skillSection";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <section id="home" className="section col-span-2">
        <HomeSection />
      </section>

      <section id="about" className="section">
        <AboutMePage />
      </section>
      <div></div>
      
      <section id="ed" className="section flex col-span-2 justify-end">
        
          <EducationSection />
        
      </section>
      <section id="skill" className="section col-span-2">
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
