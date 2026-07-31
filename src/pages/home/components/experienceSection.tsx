const experiences = [
  {
    id: 1,
    company: "Asia Sermkij Leasing PCL (ASK)",
    role: "Web Application Programmer",
    team: "Team Innovation",
    period: "May 2026 - Present",
    tag: "current",
    detail: [
      "Develop and maintain internal web applications using AngularJS (frontend) and Spring Boot (backend).",
      "Build and maintain PL/SQL stored procedures for data processing and business logic on Oracle Database.",
      "Work with the Innovation team to research and build new internal tools.",
    ],
  },
  {
    id: 2,
    company: "Asia Sermkij Leasing PCL (ASK)",
    role: "Web Application Programmer",
    team: "Internship",
    period: "November 2025 - March 2026",
    tag: "internship",
    detail: [
      "Developed a Data Management System for internal use.",
      "Built web application features using AngularJS for the frontend and Spring Boot for the backend.",
      "Developed and maintained PL/SQL stored procedures on an Oracle Database.",
    ],
  },
];

export const ExperienceContent = () => {
  return (
    <div className="max-w-3xl">
      <div className="mono text-xs text-gray-400 mb-4">
        portfolio › experience.ts
      </div>
      <div className="mono tok-comment mb-6">
        // work experience, most recent first
      </div>

      <div className="flex flex-col gap-5">
        {experiences.map((item) => (
          <div
            key={item.id}
            className="relative border border-gray-200  p-5 pl-6 hover:border-violet-300 hover:shadow-sm transition"
          >
            <span className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-violet-400" />
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div className="font-bold text-gray-900">{item.role}</div>
                <div className="text-sm text-gray-500">{item.company}</div>
              </div>
              <span
                className={`ide-chip ${
                  item.tag === "current" ? "accent" : ""
                }`}
              >
                {item.tag}
              </span>
            </div>
            <div className="mono text-xs text-gray-400 mt-2">
              {item.period} · {item.team}
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              {item.detail.map((line, index) => (
                <li key={index} className="text-gray-600 text-sm leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
