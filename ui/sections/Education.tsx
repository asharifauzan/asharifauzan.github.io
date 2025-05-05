import React from "react";

type EducationType = {
  name: string;
  major: string;
  period: string;
};

export default function EducationSection() {
  const data: EducationType[] = [
    {
      name: "National Institute of Science and Technology",
      major: "B.D. Informatic Engineering",
      period: "2018 - 2022",
    },
    {
      name: "SMKN 3 Depok",
      major: "Computer Network Engineering",
      period: "2014 - 2018",
    },
  ];

  return (
    <section id="education">
      <h3 className="subsection-title">Education 🎓</h3>
      <div className="-mx-2.5 p-2.5 space-y-2">
        {data.map((row) => (
          <div key={row.name} className="education-item">
            <h4 className="article-title">{row.name}</h4>
            <p className="text-description">{row.major}</p>
            <p className="subarticle-title">{row.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
