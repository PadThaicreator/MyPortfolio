import { Github, Globe } from "lucide-react";
import type { ProjectCardType } from "./type";

const projects: ProjectCardType[] = [
  {
    id: "1",
    projectName: "Serious Stock",
    description:
      "It's my personal Project About Stock Market , In Website can Buy-Sell Quote and can chat to another",
    webUrl: "https://serious-stock.vercel.app/",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/testpoonnawit.appspot.com/o/Screenshot%202025-07-05%20205127.png?alt=media&token=2bc41d2e-b47b-4168-9a0d-211556d5625a",
    tool: ["Next.js", "TailWindCSS", "Node.js", "MongoDB"],
    status: "active",
    createdAt: "April 2025",
    gitHubUrl: "https://github.com/PadThaicreator/SeriousStock.git",
  },
  {
    id: "2",
    projectName: "POS Example ",
    description:
      "It's my personal Project to learn Laravel Framework , It is POS of Cafe. In system can CRUD of Menu, Order, Membership ",
    webUrl: "https://pos-example-1.onrender.com/",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/testpoonnawit.appspot.com/o/Screenshot%202025-07-13%20100653.png?alt=media&token=a26ff7a1-fe61-4ce7-a6f4-12d5bdea3dda",
    tool: ["Laravel", "TailWindCSS", "MySQL"],
    status: "active",
    createdAt: "June 2025",
    gitHubUrl: "https://github.com/PadThaicreator/POS_Example.git",
  },
  {
    id: "3",
    projectName: "ThaiXplore",
    description:
      "It's my group Project in Software Engineering class , I develope on Front-end , This website is made for hotels, event organizers, car rentals, and restaurant owners to promote their services and Tourist can book the service or package on the Website   ",
    webUrl: "",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/testpoonnawit.appspot.com/o/Screenshot%202025-07-13%20104822.png?alt=media&token=96a08600-1194-454a-ab71-ccfaee2a390b",
    tool: ["React.js", "TailWindCSS", "Node.js", "MongoDB"],
    status: "active",
    createdAt: "Jan - Mar 2025",
    gitHubUrl: "https://github.com/PrinTTer/SE_67_GROUP_8.git",
  },
];

export const ProjectSection = () => {
  return (
    <fieldset className="card-section border   gap-4  text-xl flex flex-1 flex-wrap ">
      <legend className="font-semibold">Project Experience</legend>
      <div className="text-black font-normal flex flex-1 gap-2 flex-col text-base   ">
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
    <div className="flex flex-1  flex-col border border-gray-300 rounded-lg p-4 gap-2 bg-white">
      <div className="flex">{item.projectName}</div>
      <div className="flex">{item.description}</div>
      <div className="flex  overflow-hidden">
        <img src={item.imgUrl} alt={item.projectName}  />
      </div>
      <div className="flex justify-between ">
        <div className="flex gap-2">
          {item.webUrl && (
            <a href={item.webUrl} target="_blank">
              <Globe className="bg-gray-200 rounded-full p-2" size={36} />
            </a>
          )}
          <a href={item.gitHubUrl} target="_blank">
            <Github className="bg-gray-200 rounded-full p-2" size={36} />
          </a>
        </div>
        <div className="flex gap-4">
          {item?.tool.map((i: string, index: number) => (
            <div
              key={index}
              className="bg-amber-200 rounded-full p-2 px-4 text-xs opacity-70"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
