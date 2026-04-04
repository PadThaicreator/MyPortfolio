const education = [
  {
    id: 1,
    place: "Kasetsart University, Kamphaeng Saen Campus",
    toYear: "Present",
    fromYear: "June 2022",
    type: "University",
    program: "B.Eng. in Computer Engineering Kasertsart University(KU), Kamphaensaen",
    gpa: 3.64
  },
  {
    id: 2,
    place: "Thawaranukul School",
    toYear: "March 2022",
    fromYear: "May 2016",
    type: "High School",
    program: "Sci-Math (SMTE)",
    gpa: 3.92
  },
];

export const EducationSection = () => {
  return (
    <fieldset className="card-section border">
      <legend className="ml-auto text-2xl font-semibold">Education</legend>

      <div className="text-black font-normal flex flex-col gap-3 flex-1">
        {education.map((item) => (
          <div key={item.id} className="flex flex-col  gap-4 md:gap-0 border  p-5 rounded-2xl hover:shadow-lg duration-300 border-gray-200">
            <div className="flex items-center justify-between">
              <div className="font-semibold md:font-normal text-gray-500 md:text-black">
                {item.fromYear} - {item.toYear}
              </div>
              <div className="bg-amber-100 p-2 px-4 rounded-lg text-gray-600 self-start text-sm shadow-lg">{item.type}</div>

            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="flex flex-col md:flex-row flex-1 justify-between items-start md:items-center gap-2 md:gap-0">
                <div className="flex flex-col">
                  <div className="font-bold text-lg md:font-normal md:text-base">{item.place}</div>
                  <div>{item.program} </div>
                  <div>GPA : {item.gpa} </div>
                </div>

              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
