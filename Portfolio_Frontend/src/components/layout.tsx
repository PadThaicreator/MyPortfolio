// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import { HomeSection } from "../pages/home/components/homeSection";
import { useState } from "react";

const Layout = () => {
  const [isSelected, setSelected] = useState<string>("");

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 md:bg-blue-400    ">
      <div>
        <nav className="flex flex-1   flex-col items-center justify-center gap-10  p-4 h-screen top-0 sticky z-10 text-white">
          <HomeSection />

          <div className="flex gap-4">
            <a
              href="#about"
              className={` ${isSelected == "about" ? " selectNav" : ""} p-2`}
              onClick={() => setSelected("about")}
            >
              About Me
            </a>
            <a
              href="#ed"
              className={` ${isSelected == "ed" ? "  selectNav" : ""} p-2`}
              onClick={() => setSelected("ed")}
            >
              Education
            </a>
            <a
              href="#skill"
              className={` ${isSelected == "skill" ? "  selectNav" : ""} p-2`}
              onClick={() => setSelected("skill")}
            >
              Skill
            </a>
            <a
              href="#exp"
              className={` ${isSelected == "exp" ? "  selectNav" : ""} p-2`}
              onClick={() => setSelected("exp")}
            >
              Project
            </a>
            <a
              href="#contact"
              className={` ${isSelected == "contact" ? "  selectNav" : ""} p-2`}
              onClick={() => setSelected("contact")}
            >
              Contact
            </a>
          </div>
          <div>
            <div className="box "></div>
            <div className="box "></div>
            <div className="box "></div>
            <div className="box "></div>
          </div>
          <div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </nav>
      </div>

      <main  className="flex flex-1 flex-wrap border flex-col z-50 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
