const tags = [
  { label: "First-Class Honors", accent: true },
  { label: "GPA 3.64", accent: false },
  { label: "Software Engineering ", accent: false },
  { label: "System Analyst", accent: false },
  { label: "Database Administrator", accent: false },
];

export const AboutContent = () => {
  return (
    <div className="max-w-3xl">
      <div className="mono text-violet-500 text-sm mb-5">$ whoami</div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
        Poonnawit Poosakul 
      </h1>

      <p className="text-gray-500 mt-5 leading-relaxed">
        Computer Engineering graduate from Kasetsart University, Kamphaeng Saen Campus. Always learning and improving my technical skills.
      </p>

      <div className="flex gap-2 flex-wrap mt-6">
        {tags.map((t) => (
          <span key={t.label} className={`ide-chip ${t.accent ? "accent" : ""}`}>
            {t.label}
          </span>
        ))}
      </div>

      <hr className="my-10 border-gray-200" />

      <div className="mono text-xs text-gray-400">portfolio › about.md</div>
      <h2 className="text-xl font-bold text-gray-900 mt-2">About me</h2>
      {/* <div className="mono text-gray-400 text-sm mt-3">
        {"<!-- a short intro -->"}
      </div> */}
      <p className="text-gray-600 mt-3 leading-relaxed">
        Hi, I'm Poonnawit. I'm passionate about Software Engineering. 
        I'm always looking for opportunities to learn, grow, and expand my skills as a Software Engineer, System Analyst, or Database Administrator.
      </p>
    </div>
  );
};
