import { Github } from "lucide-react";
import type { ProjectCardType } from "./type";

const projects: ProjectCardType[] = [
  {
    id: "1",
    projectName: "Serious Stock",
    description:
      "It's my personal Project About Stock Market , In Website can Buy-Sell Quote and can chat to another",
    webUrl: "https://serious-stock.vercel.app/",
    imgUrl:
      "https://res.cloudinary.com/dlsd9groz/image/upload/v1767276125/Serious_Stock_ontbzm.png",
    tool: ["Next.js", "TailWindCSS", "Node.js", "MongoDB"],
    status: "active",
    createdAt: "April 2025",
    gitHubUrl: "https://github.com/PadThaicreator/SeriousStock.git",
  },
  {
    id: "2",
    projectName: "POS Example ",
    description:
      "It's my personal Project to learn Laravel Framework , It is POS of Cafe. In system can CRUD of Menu, Order ",
    webUrl: "https://pos-example-1.onrender.com/",
    imgUrl:
      "https://res.cloudinary.com/dlsd9groz/image/upload/v1767276125/POS_Laravel_yfnve7.png",
    tool: ["Laravel", "TailWindCSS", "MySQL"],
    status: "active",
    createdAt: "May 2025",
    gitHubUrl: "https://github.com/PadThaicreator/POS_Example.git",
  },
  {
    id: "3",
    projectName: "ThaiXplore",
    description:
      "It's my group Project in Software Engineering class , I develope on Front-end , This website is made for hotels, event organizers, car rentals, and restaurant owners to promote their services and Tourist can book the service or package on the Website   ",
    webUrl: "",
    imgUrl:
      "https://res.cloudinary.com/dlsd9groz/image/upload/v1767276125/Thaixplore_csymf9.png",
    tool: ["React.js", "TailWindCSS", "Node.js", "MongoDB"],
    status: "active",
    createdAt: "Jan - Mar 2025",
    gitHubUrl: "https://github.com/PrinTTer/SE_67_GROUP_8.git",
  },
  {
    id: "4",
    projectName: "PEACE",
    description:
      "PEACE is a web-based application developed as a group project in a Pattern Recognition course. The system is designed to detect and classify toxic or abusive comments on social media platforms using Machine Learning techniques.",
    webUrl: "",
    imgUrl:
      "https://res.cloudinary.com/dlsd9groz/image/upload/v1767277148/Screenshot_2026-01-01_211853_b1j3d6.png",
    tool: ["React.js", "FastApi", "Node.js", "MongoDB"],
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

export const ProjectSection = () => {
  return (
    <fieldset className="card-section border   gap-4  text-xl  ">
      <legend className="font-semibold">Project Experience</legend>
      <div
        className="text-black font-normal  grid
  grid-cols-1
  md:grid-cols-2
  gap-4 text-base   "
      >
        {projects.map((item: ProjectCardType) => (
          <ProjectCardComponent key={item.id} item={item} />
        ))}
      </div>
    </fieldset>
  );
};

const ProjectCardComponent = (prop: { item: ProjectCardType }) => {
  const { item } = prop;
  return (
    <div
      className="
  flex flex-col md:flex-row
  border border-gray-300
  rounded-lg
  p-4
  gap-4
  bg-white
"
    >
      <div
        className="
  w-full
  md:w-1/3
  overflow-hidden
  rounded-md
"
      >
        <img
          src={item.imgUrl}
          alt={item.projectName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <strong className="text-lg">{item.projectName}</strong>
        <p className="text-sm text-gray-700">{item.description}</p>

        <div className="flex justify-between items-center flex-wrap gap-2 mt-auto">
          <a href={item.gitHubUrl} target="_blank">
            <Github className="bg-gray-200 rounded-full p-2" size={36} />
          </a>

          <div className="flex gap-2 flex-wrap">
            {item.tool.map((i, index) => (
              <span
                key={index}
                className="bg-amber-200 rounded-full px-3 py-1 text-xs opacity-70"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
