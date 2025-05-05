import React from "react";

type SkillType = {
  name: string;
  setSkill: string[];
};

export default function SkillSection() {
  const data: SkillType[] = [
    {
      name: "Languages & Frameworks",
      setSkill: [
        "Javascript",
        "Typescript",
        "React",
        "Nextjs",
        "Gatsby",
        "Vuejs",
      ],
    },
    { name: "State Management", setSkill: ["Redux", "Context API", "Zustand"] },
    {
      name: "UI Libraries",
      setSkill: ["Tailwind", "Material UI", "Bootstrap"],
    },
    {
      name: "Testing",
      setSkill: ["Jest", "React Testing Library", "Vitest", "Puppeteer"],
    },
    { name: "Build Tools", setSkill: ["Vite", "Webpack", "Parcel"] },
    { name: "Deployment", setSkill: ["Docker", "Bash Shell"] },
    {
      name: "Version Control",
      setSkill: [
        "Git",
        "Github",
        "Gitlab",
        "Bitbucket",
        "Mercurial",
        "NPM",
        "Gitlab Runner",
        "Jenkins",
      ],
    },
    {
      name: "Backend & Database",
      setSkill: [
        "Nodejs",
        "Express",
        "Graphql",
        "Rest API",
        "Mysql",
        "Postgresql",
      ],
    },
    {
      name: "Desktop & Mobile",
      setSkill: ["Electron", "GJs", "React Native", "Flutter"],
    },
  ];

  return (
    <section id="skills" className="mb-6">
      <h3 className="subsection-title">Skills 🛠️</h3>
      <div className="-mx-2.5 p-2.5 space-y-2">
        {data.map((row) => (
          <div key={row.name} className="skill-item">
            <h4 className="article-title">{row.name}</h4>
            <p className="text-description">{row.setSkill.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
