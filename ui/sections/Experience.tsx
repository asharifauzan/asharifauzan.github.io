import React from "react";

type PositionsType = {
  position_name: string;
  periode: string;
  jobdesks?: string[];
};

type ExperiencesType = {
  place: string;
  positions: PositionsType[];
};

export default function ExperiencesSection() {
  const data: ExperiencesType[] = [
    {
      place: "PT Falah Inovasi Teknologi",
      positions: [
        {
          position_name: "Frontend Developer Lead",
          periode: "November 2022 - Now",
          jobdesks: [
            "Identifying system requirements and translated into application architecture",
            "Choose and maintain application tech stacks (React, Nextjs, Nuxtjs)",
            "Create and develop complex UI and layout based on system design",
            "Create custom hooks, reusable components and helpers on specific git branches",
            "Develop, maintaining and publish internal UI component library into private NPM registry",
            "Maintaining staging server and production server",
            "Monitor frontend application performance, identify bottleneck and implement optimizations",
            "Work closely with UI/UX Team to ensure seamless user experiences",
            "Coordinate with Backend Team to optimize API integration",
            "Communicate project updates with stakeholders",
            "Establish and enforce coding standards, best practices and development workflows",
            "Conduct code reviews and ensure quality through testing and linting",
            "Mentoring and provide technical guidance to Frontend Team",
            "Assign and manage development tasks based on sprint planning",
          ],
        },
        {
          position_name: "Frontend Developer Staff",
          periode: "January 2021 - November 2022",
          jobdesks: [
            "Developed and maintained internal video conference application with Ruby on Rails, Meteor.js and WebRTC",
            "Conduct load testing with Puppeteer to find maximum concurrent users",
            "Created and customized Moodle themes with PHP and Css",
            "Deployed an application into staging server and production server with Docker",
            "Documented system design components into Storybook application",
          ],
        },
      ],
    },
    {
      place: "PT Airindo Sakti",
      positions: [
        {
          position_name: "IT Support",
          periode: "July - October 2018",
          jobdesks: [
            "Instalasi printer, konfigurasi, troubleshoot dan setup printer sharing",
            "Audit asset IT",
            "Merakit dan troubleshoot perangkat keras user",
            "Setting jaringan pada user",
            "Instalasi software pada user",
            "Instalasi sistem operasi",
            "Membeli hardware, software dan perangkat penunjang It",
          ],
        },
      ],
    },
    {
      place: "Faculty of Computer Science, University of Indonesia",
      positions: [
        {
          position_name: "Internship IT Support",
          periode: "September - December 2015",
          jobdesks: [
            "Instalasi printer, konfigurasi, troubleshoot dan setup printer sharing",
            "Audit asset IT",
            "Merakit dan troubleshoot perangkat keras user",
            "Setting jaringan pada user",
            "Instalasi software pada user",
            "Instalasi sistem operasi",
            "Membeli hardware, software dan perangkat penunjang It",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experiences" className="space-y-2 mb-12">
      <h2 className="section-title">Experiences 💼</h2>
      <div className="space-y-5">
        {data.map((row) => (
          <article
            key={row.place}
            className="experience-item row-hover-focus -mx-2.5 p-2.5"
          >
            <h3 className="subsection-title">{row.place}</h3>
            <div className="space-y-3">
              {row.positions.map((position) => (
                <div
                  key={position.position_name}
                  className="relative pl-6 border-l-2 border-slate-500"
                >
                  {/* timeline dot */}
                  <div className="absolute w-3 h-3 rounded-full top-[8px] left-[-7px] bg-slate-500"></div>
                  <p className="article-title">{position.position_name}</p>
                  <span className="subarticle-title float-end">
                    🗓️ {position.periode}
                  </span>
                  <ul className="list-disc list-inside text-description">
                    {position.jobdesks?.map((jobdesk) => (
                      <li key={jobdesk}>{jobdesk}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
