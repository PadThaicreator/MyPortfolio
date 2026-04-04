import { AboutMePage } from "./components/aboutMeSection";
import { ContactSection } from "./components/contactSection";
import { EducationSection } from "./components/educationSection";
import { IntershipSection } from "./components/intershipSection";
import { ProjectSection } from "./components/projectSection";
import { SkillSection } from "./components/skillSection";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-10 winky-sans">
        <section id="about" className="section">
          <AboutMePage />
        </section>
        <section id="ed" className="section">
          <EducationSection />
        </section>
        <section id="intern" className="section">
          <IntershipSection />
        </section>
        <section id="skill" className="section">
          <SkillSection />
        </section>
        <section id="exp" className="section">
          <ProjectSection />
        </section>

        <section id="contact" className="section">
          <ContactSection />
        </section>
      </div>

    </div>
  );
}
