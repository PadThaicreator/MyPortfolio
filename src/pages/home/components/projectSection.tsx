import { ExternalLink, Github } from "lucide-react";
import type { ProjectCardType } from "./type";

const projects: ProjectCardType[] = [
  // {
  //   id: "1",
  //   projectName: "Serious Stock",
  //   description:
  //     "Personal project about the stock market. Users can buy/sell quotes and chat with others.",
  //   webUrl: "https://serious-stock.vercel.app/",
  //   imgUrl:
  //     "https://res.cloudinary.com/dlsd9groz/image/upload/v1767276125/Serious_Stock_ontbzm.png",
  //   tool: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"],
  //   status: "active",
  //   createdAt: "April 2025",
  //   gitHubUrl: "https://github.com/PadThaicreator/SeriousStock.git",
  // },
  // {
  //   id: "2",
  //   projectName: "POS Example",
  //   description:
  //     "Personal project to learn Laravel. A cafe POS system with CRUD for menu and orders.",
  //   webUrl: "https://pos-example-1.onrender.com/",
  //   imgUrl:
  //     "https://res.cloudinary.com/dlsd9groz/image/upload/v1767276125/POS_Laravel_yfnve7.png",
  //   tool: ["Laravel", "TailwindCSS", "MySQL"],
  //   status: "active",
  //   createdAt: "May 2025",
  //   gitHubUrl: "https://github.com/PadThaicreator/POS_Example.git",
  // },
  {
    id: "3",
    projectName: "ThaiXplore",
    description:
      "Group project in Software Engineering. A platform for hotels, event organizers, car rentals, and restaurants to promote services and for tourists to book them. I worked on the frontend.",
    webUrl: "",
    imgUrl:
      "https://res.cloudinary.com/dlsd9groz/image/upload/v1767276125/Thaixplore_csymf9.png",
    tool: ["React.js", "TailwindCSS", "Node.js", "MongoDB"],
    status: "active",
    createdAt: "Jan - Mar 2025",
    gitHubUrl: "https://github.com/PrinTTer/SE_67_GROUP_8.git",
  },
  {
    id: "4",
    projectName: "PEACE",
    description:
      "Group project in Pattern Recognition. Detects and classifies toxic or abusive comments on social media using Machine Learning.",
    webUrl: "",
    imgUrl:
      "https://res.cloudinary.com/dlsd9groz/image/upload/v1767277148/Screenshot_2026-01-01_211853_b1j3d6.png",
    tool: ["React.js", "FastAPI", "Node.js", "MongoDB"],
    status: "active",
    createdAt: "Aug - Oct 2025",
    gitHubUrl: "https://github.com/PadThaicreator/Pattern_PEACE",
  },
  {
    id: "5",
    projectName: "Bank System",
    description:
      "Collaborated in a team to design and develop a full-stack banking and investment system.",
    webUrl: "",
    imgUrl:
      "https://res.cloudinary.com/dlsd9groz/image/upload/v1776010390/Screenshot_2026-04-12_231121_wj1l2i.png",
    tool: ["React.js", "Spring Boot", "PostgreSQL"],
    status: "active",
    createdAt: "March - April 2026",
    gitHubUrl: "https://github.com/PadThaicreator/bank-system.git",
  },
];

export const ProjectsContent = () => {
  return (
    <div className="max-w-4xl">
      <div className="mono text-xs text-gray-400 mb-4">portfolio › projects/</div>
      <div className="mono tok-comment mb-6">
        // {projects.length} repositories
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        {projects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ item }: { item: ProjectCardType }) => {
  return (
    <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:border-violet-300 hover:shadow-sm transition">
      <div className="w-full bg-gray-50 border-b border-gray-100">
        <img
          src={item.imgUrl}
          alt={`${item.projectName} preview`}
          loading="lazy"
          className="w-full h-auto object-contain block"
        />
      </div>
      <div className="flex flex-col flex-1 p-4 gap-2">
        <div className="flex items-center justify-between gap-2">
          <span className="mono font-bold text-gray-900">
            {item.projectName}
          </span>
          <span className="mono text-[11px] text-gray-400">
            {item.createdAt}
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {item.description}
        </p>

        <div className="flex gap-1.5 flex-wrap mt-1">
          {item.tool.map((t) => (
            <span
              key={t}
              className="mono text-[11px] text-violet-700 bg-violet-50 border border-violet-100 rounded px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-100">
          <a
            href={item.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900"
            aria-label={`${item.projectName} GitHub repository`}
          >
            <Github size={15} />
            <span className="mono">source</span>
          </a>
          {item.webUrl && (
            <a
              href={item.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-violet-600 hover:text-violet-800"
            >
              <ExternalLink size={15} />
              <span className="mono">live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
