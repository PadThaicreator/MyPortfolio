import { useState } from "react";
import type { FC } from "react";
import {
  Briefcase,
  Folder,
  GraduationCap,
  Heart,
  Terminal,
  User,
  Wrench,
  X,
} from "lucide-react";
import { AboutContent } from "./components/aboutMeSection";
import { EducationContent } from "./components/educationSection";
import { ExperienceContent } from "./components/experienceSection";
import { SkillsContent } from "./components/skillSection";
import { ProjectsContent } from "./components/projectSection";
import { ContactContent } from "./components/contactSection";
import { HobbyContent } from "./components/hobbySection";

type FileKey =
  | "about.md"
  | "education.json"
  | "experience.ts"
  | "skills.yaml"
  | "projects/"
  | "hobbies.txt"
  | "contact.sh";

const FILES: {
  key: FileKey;
  label: string;
  ext: string;
  icon: FC<{ size?: number }>;
}[] = [
  { key: "about.md", label: "about", ext: ".md", icon: User },
  { key: "education.json", label: "education", ext: ".json", icon: GraduationCap },
  { key: "experience.ts", label: "experience", ext: ".ts", icon: Briefcase },
  { key: "skills.yaml", label: "skills", ext: ".yaml", icon: Wrench },
  { key: "projects/", label: "projects", ext: "/", icon: Folder },
  { key: "hobbies.txt", label: "hobbies", ext: ".txt", icon: Heart },
  { key: "contact.sh", label: "contact", ext: ".sh", icon: Terminal },
];

const CONTENT: Record<FileKey, FC> = {
  "about.md": AboutContent,
  "education.json": EducationContent,
  "experience.ts": ExperienceContent,
  "skills.yaml": SkillsContent,
  "projects/": ProjectsContent,
  "hobbies.txt": HobbyContent,
  "contact.sh": ContactContent,
};

export default function Home() {
  const [active, setActive] = useState<FileKey>("about.md");
  const [openTabs, setOpenTabs] = useState<FileKey[]>(["about.md"]);

  const openFile = (key: FileKey) => {
    setActive(key);
    setOpenTabs((tabs) => (tabs.includes(key) ? tabs : [...tabs, key]));
  };

  const closeTab = (key: FileKey, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenTabs((tabs) => {
      const next = tabs.filter((t) => t !== key);
      if (next.length === 0) return tabs;
      if (active === key) setActive(next[next.length - 1]);
      return next;
    });
  };

  const ActiveContent = CONTENT[active];

  return (
    <div className="ide">
      {/* Title bar */}
      <div className="ide-titlebar">
        <div className="flex gap-2">
          <span className="dot bg-[#ff5f57]" />
          <span className="dot bg-[#febc2e]" />
          <span className="dot bg-[#28c840]" />
        </div>
        <div className="ide-title">poonnawit-portfolio — main</div>
        <div className="w-14" />
      </div>

      <div className="ide-body">
        {/* Sidebar */}
        <aside className="ide-sidebar">
          <div className="ide-brand">
            <div className="text-white font-bold text-lg leading-tight">
              Poonnawit
              <br />
              Poosakul
            </div>
            <div className="mono text-violet-400 text-xs mt-2">
              // interest at Software Dev, CyberSecurity, DBA
            </div>
          </div>

          <div className="ide-explorer">
            <div className="mono text-[11px] tracking-[0.2em] text-gray-500 px-3 mb-2">
              PORTFOLIO /
            </div>
            {FILES.map((f) => {
              const Icon = f.icon;
              return (
                <button
                  key={f.key}
                  onClick={() => openFile(f.key)}
                  className={`ide-file mono ${active === f.key ? "active" : ""}`}
                >
                  <Icon size={15} />
                  <span>
                    <span className="text-gray-200">{f.label}</span>
                    <span className="text-gray-500">{f.ext}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="ide-status mono">
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="dot bg-emerald-400 !w-2 !h-2" />
              Nice to meet you
            </div>
            <div className="text-gray-500 mt-1">I'm Namo</div>
          </div>
        </aside>

        {/* Main area */}
        <div className="ide-main">
          <div className="ide-tabs">
            {openTabs.map((key) => {
              const f = FILES.find((x) => x.key === key)!;
              return (
                <div
                  key={key}
                  onClick={() => setActive(key)}
                  className={`ide-tab mono text-xs ${active === key ? "active" : ""}`}
                >
                  <span>
                    {f.label}
                    {f.ext}
                  </span>
                  <button
                    onClick={(e) => closeTab(key, e)}
                    className="ide-tab-close"
                    aria-label={`Close ${f.label}${f.ext}`}
                  >
                    <X size={12} />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="ide-content">
            <ActiveContent />
          </div>
        </div>
      </div>
    </div>
  );
}
