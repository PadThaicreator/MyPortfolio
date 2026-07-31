const skillGroups: { key: string; items: string[] }[] = [
  { key: "languages", items: ["Thai (Native)", "English (semi-fluent)"] },
  { key: "programming", items: ["C", "Java", "JavaScript"] },
  { key: "web", items: ["HTML", "CSS", "JavaScript"] },
  { key: "database", items: ["MySQL", "MongoDB", "Oracle (PL/SQL)" , "PostgreSQL"] },
  {
    key: "frameworks",
    items: [
     
      "React.js",
      "React Native",
      "Angular.js",
      "Next.js",
      "Express.js",
      "Spring Boot",
    ],
  },
  { key: "tools", items: [ "Figma", "Git", "Github" , "Docker"] },
];

export const SkillsContent = () => {
  return (
    <div className="max-w-3xl">
      <div className="mono text-xs text-gray-400 mb-4">
        portfolio › skills.yaml
      </div>

      <div className="ide-code">
        <div className="tok-comment mb-2"># technical skills</div>
        {skillGroups.map((group) => (
          <div key={group.key} className="mb-3">
            <span className="tok-key">{group.key}</span>
            <span className="tok-punc">:</span>
            {group.items.map((item) => (
              <div key={item} className="pl-6">
                <span className="tok-punc">- </span>
                <span className="tok-str">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
