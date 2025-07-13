import { AboutMePage } from "./components/aboutMeSection";
import { ContactSection } from "./components/contactSection";
import { EducationSection } from "./components/educationSection";
import { ProjectSection } from "./components/projectSection";
import { SkillSection } from "./components/skillSection";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 winky-sans">
        <section id="about" className="section col-span-2">
          <AboutMePage />
        </section>
        <section id="ed" className="section flex col-span-2 justify-end">
          <EducationSection />
        </section>
        <section id="skill" className="section col-span-2">
          <SkillSection />
        </section>
        <section id="exp" className="section col-span-2">
          <ProjectSection />
        </section>

        <section id="contact" className="section col-span-2">
          <ContactSection />
        </section>
      </div>
      
    </div>
  );
}
