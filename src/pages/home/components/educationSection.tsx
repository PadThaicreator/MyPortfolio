const education = [
  {
    school: "Kasetsart University, Kamphaeng Saen Campus",
    degree: "B.Eng. in Computer Engineering",
    period: "June 2022 - March 2026",
    gpa: 3.64,
    honor: "First-Class Honors",
  },
  {
    school: "Thawaranukul School",
    degree: "Sci-Math (SMTE)",
    period: "May 2016 - March 2022",
    gpa: 3.92,
    honor: null,
  },
];

type Entry = (typeof education)[number];

const Line = ({
  k,
  value,
  type,
  comma = true,
}: {
  k: string;
  value: string | number | null;
  type: "str" | "num";
  comma?: boolean;
}) => (
  <div className="pl-8">
    <span className="tok-str">"{k}"</span>
    <span className="tok-punc">: </span>
    {value === null ? (
      <span className="tok-bool">null</span>
    ) : type === "num" ? (
      <span className="tok-num">{value}</span>
    ) : (
      <span className="tok-str">"{value}"</span>
    )}
    {comma && <span className="tok-punc">,</span>}
  </div>
);

export const EducationContent = () => {
  return (
    <div className="max-w-3xl">
      <div className="mono text-xs text-gray-400 mb-4">
        portfolio › education.json
      </div>

      <div className="ide-code">
        <div className="tok-comment mb-2">// academic background</div>
        <span className="tok-punc">[</span>
        {education.map((item: Entry, i) => (
          <div key={item.school} className="pl-4">
            <span className="tok-punc">{"{"}</span>
            <Line k="school" value={item.school} type="str" />
            <Line k="degree" value={item.degree} type="str" />
            <Line k="period" value={item.period} type="str" />
            <Line k="gpa" value={item.gpa} type="num" />
            {item.honor && <Line k="honor" value={item.honor} type="str" comma={false} />}
            <span className="tok-punc">
              {"}"}
              {i < education.length - 1 ? "," : ""}
            </span>
          </div>
        ))}
        <span className="tok-punc">]</span>
      </div>
    </div>
  );
};
