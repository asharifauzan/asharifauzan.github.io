import type { Payload } from "payload";

export const script = async(payload: Payload) => {
  console.log("🌱 start seeding global about");

  await payload.updateGlobal({
    slug: "about",
    data: {
      fullname: "Fauzan Hibatullah Ashari",
      description:
        "Senior Frontend Developer with 5+ years of hands-on experience building scalable, high-performance web applications using modern JavaScript frameworks. Strong focus on React, React Native, Nextjs, Angular, and Vue, with a passion for clean UI, reusable components, and excellent user experience. Proven ability to collaborate with ui/ux designers, backend engineers, and product managers in agile environments.",
      highlightedSkills: [
        { skill: "Frontend Developer" },
        { skill: "Reactjs" },
        { skill: "Nextjs" },
        { skill: "Vuejs" },
        { skill: "React Native" },
        { skill: "Flutter" },
        { skill: "Fulltime Learner" },
      ],
    },
  });

  console.log("🌱 done seeding global about");
};
