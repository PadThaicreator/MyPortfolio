// src/components/Layout.tsx
import { Outlet, Link } from "react-router-dom";
import { HomeSection } from "../pages/home/components/homeSection";
import { useState } from "react";

const Layout = () => {
  const [isSelected, setSelected] = useState<string>("");

  return (
    <div className="grid grid-cols-2">
      <div>
        <nav className="flex  flex-1 flex-col items-center justify-center gap-10 shadow-lg rounded-b-2xl bg-[#555879] p-4 h-screen top-0 sticky z-10 text-white">
          <HomeSection />
          <div className="flex gap-4">
            <a href="#about" className={` ${isSelected == "about" ? ' selectNav' : ''} p-2`} onClick={() => setSelected("about")}>
              About Me
            </a>
            <a href="#ed" className={` ${isSelected == "ed" ? '  selectNav' : ''} p-2`}onClick={() => setSelected("ed")}>
              Education
            </a>
            <a href="#skill" className={` ${isSelected == "skill" ? '  selectNav' : ''} p-2`} onClick={() => setSelected("skill")}>
              Skill
            </a>
            <a href="#exp" className={` ${isSelected == "exp" ? '  selectNav' : ''} p-2`} onClick={() => setSelected("exp")}>
              Experience
            </a>
            <a href="#contact" className={` ${isSelected == "contact" ? '  selectNav' : ''} p-2`} onClick={() => setSelected("contact")}>
              Contact
            </a>
          </div>
        </nav>
      </div>

      <main style={{ padding: "20px" }}>
        <Outlet /> {/* ส่วนนี้จะแสดงเนื้อหาของ Route ย่อย */}
      </main>
    </div>
  );
};

export default Layout;
