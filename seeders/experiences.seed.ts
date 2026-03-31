import type { Payload } from "payload";

const data = [
  {
    company: "PT Steradian Data Optima (placement PT Bank Rakyat Indonesia)",
    position: "Frontend Developer Staff",
    description:
      "- Migrated an exist react application into a microfrontend-based application\n- Built complex ui covering reusable components and layout based on the system design\n- Monitored frontend application performance, identified bottlenecks, and implemented optimizations\n- Coordinate with backend engineer to optimize API integration\n- Deployed docker image to server environment",
    startDate: "2025-05-19 19:00:00+07",
    endDate: "2026-05-18 19:00:00+07",
  },
  {
    company: "PT Falah Inovasi Teknologi",
    position: "Frontend Developer Lead",
    description:
      "- Identified system requirements and translated into application architecture\n- Choose and maintained application tech stacks (React, Nextjs, Nuxtjs)\n- Built complex ui covering reusable components and layout based on the system design\n- Created custom hooks, reusable components, and helpers on specific git branches\n- Developed, maintained, and published internal ui component library into private NPM registry\n- Monitored frontend application performance, identified bottlenecks, and implemented optimizations\n- Coordinate with ui/ux designer to ensure seamless user experiences\n- Coordinate with backend engineer to optimize API integration\n- Communicate project updates with stakeholders\n- Ensure teams followed coding standards and development workflows\n- Mentored junior developer and conducted code review\n- Assigned and manage development tasks based on sprint planning\n",
    startDate: "2022-11-15 19:00:00+07",
    endDate: "2025-04-30 19:00:00+07",
  },
  {
    company: "PT Falah Inovasi Teknologi",
    position: "Frontend Developer Staff",
    description:
      "- Developed and maintained internal video conference application with Ruby on Rails, Meteorjs, and WebRTC\n- Conduct load testing with puppeteer to find maximum concurrent users\n- Created and customized moodle themes with PHP and CSS \n- Deployed docker image to server environment\n- Documented system design components into Storybook application",
    startDate: "2021-01-11 19:00:00+07",
    endDate: "2022-11-14 19:00:00+07",
  },
  {
    company: "PT Airindo Sakti",
    position: "IT Support",
    description:
      "- Instalasi printer, konfigurasi, troubleshoot dan setup printer sharing\n- Audit asset IT\n- Merakit dan troubleshoot perangkat keras user\n- Setting jaringan pada user\n- Instalasi software pada user\n- Instalasi sistem operasi\n- Membeli hardware, software dan perangkat penunjang It",
    startDate: "2018-07-15 19:00:00+07",
    endDate: "2018-10-15 19:00:00+07",
  },
  {
    company: "Faculty of Computer Science, University of Indonesia",
    position: "IT Support (Internship)",
    description:
      "- Instalasi printer, konfigurasi, troubleshoot dan setup printer sharing\n- Audit asset IT\n- Merakit dan troubleshoot perangkat keras user\n- Setting jaringan pada user\n- Instalasi software pada user\n- Instalasi sistem operasi\n- Membeli hardware, software dan perangkat penunjang It",
    startDate: "2015-09-01 19:00:00+07",
    endDate: "2015-12-31 19:00:00+07",
  },
];

export const script = async (payload: Payload) => {
  console.log("🌱 start seeding experiences");

  for (const row of data) {
    await payload.create({
      collection: "experiences",
      data: row,
    });
  }

  console.log("🌱 done seeding experiences");
};
