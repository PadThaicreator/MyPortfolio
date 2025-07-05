import { AboutMePage } from "./components/aboutMeSection";
import { EducationSection } from "./components/educationSection";
import { SkillSection } from "./components/skillSection";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-10">
    

      <section id="about" className="section col-span-2">
        <AboutMePage />
      </section>
      
      
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
