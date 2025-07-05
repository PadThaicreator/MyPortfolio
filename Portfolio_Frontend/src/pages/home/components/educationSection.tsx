const education = [
  {
    id: 1,
    place: "Kasetsart University, Kamphaeng Saen Campus",
    toYear: "Present",
    fromYear: "June 2022",
    type: "University",
    program:"B.Eng. in Computer Engineering Kasertsart University(KU), Kamphaensaen",
    gpa : 3.58
  },
  {
    id: 2,
    place: "Thawaranukul School",
    toYear: "March 2022",
    fromYear: "May 2016",
    type: "High School",
    program: "Sci-Math (SMTE)",
    gpa : 3.92
  },
];

export const EducationSection = () => {
  return (
    <div className="card-section-right">
      <div>Education</div>

      <div className="text-black font-normal flex flex-col gap-3 p-2">
        {education.map((item) => (
          <div key={item.id} className="grid grid-cols-4 border p-5 rounded-2xl hover:shadow-lg duration-300 border-gray-200">
            <div>
              {item.fromYear} - {item.toYear}
            </div>
            <div className="col-span-3">
              <div className="flex flex-1 justify-between items-center ">
                <div className="flex flex-col">
                  <div>{item.place}</div>
                  <div>{item.program}</div>
                  <div>GPA : {item.gpa}</div>
                </div>

                <div className="bg-amber-100 p-2 px-4 rounded-lg text-gray-600 self-start text-sm shadow-lg">{item.type}</div>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
