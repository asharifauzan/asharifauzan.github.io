import type { Payload } from "payload";

const skillsets = [
  {
    name: "Languages & Frameworks",
    skills: [
      "Javascript",
      "Typescript",
      "React",
      "Nextjs",
      "Gatsby",
      "Vuejs",
      "Angular",
    ],
  },
  {
    name: "State Management",
    skills: ["Redux", "Context API", "Zusand"],
  },
  {
    name: "UI Libraries",
    skills: ["Tailwind", "Material UI", "Bootstrap"],
  },
  {
    name: "Testing & Automation",
    skills: ["Jest", "React Testing Library", "Vitest", "Puppeteer"],
  },
  {
    name: "Build Tools",
    skills: ["Vite", "Webpack", "Parcel"],
  },
  {
    name: "Deployments",
    skills: ["Docker", "Bash Shell"],
  },
  {
    name: "Version Control",
    skills: ["Git", "Github", "Gitlab", "Bitbucket", "Mercurial", "Jenkins"],
  },
  {
    name: "Backend & Databases",
    skills: [
      "PHP",
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
    skills: ["Electron", "React Native", "Flutter"],
  },
];

export const script = async (payload: Payload) => {
  console.log("🌱 start seeding skillsets and skills");

  // Seeding skillset
  for (const i of skillsets) {
    const { id } = await payload.create({
      collection: "skillsets",
      data: {
        skillsetName: i.name,
      },
    });

    // Seeding skills based on skillset
    for (const j of i.skills) {
      await payload.create({
        collection: "skills",
        data: {
          skillName: j,
          skills: id,
        },
      });
    }
  }

  console.log("🌱 done seeding skillsets and skills");
};
