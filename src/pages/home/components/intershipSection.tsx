const education = [
  {
    id: 1,
    place: "Asia Sermkij Leasing Public Company Limited",
    toYear: "March 2026",
    fromYear: "November 2025",
    detail: [
      "Developed a Data Management System for internal use.",
      "Built web application features using AngularJS for the frontend and Spring Boot for the backend.",
      "Developed and maintained PL/SQL stored procedures to handle data processing and business logic in an Oracle Database."
    ]
  }
];

export const IntershipSection = () => {
  return (
    <fieldset className="card-section border">
      <legend className=" text-2xl font-semibold">Internship</legend>

      <div className="text-black font-normal flex flex-col gap-3 p-2 flex-wrap">
        {education.map((item) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 border p-5 rounded-2xl hover:shadow-lg duration-300 border-gray-200">
            <div className="font-semibold md:font-normal text-gray-500 md:text-black">
              {item.fromYear} - {item.toYear}
            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="flex flex-1 justify-between items-center ">
                <div className="flex flex-col">
                  <div className="text-xl font-bold md:font-normal">{item.place}</div>
                  <ul className="px-4 list-disc mt-2">
                    {item.detail.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>

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
