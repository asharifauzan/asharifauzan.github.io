import React from "react";
import RowCard from "../components/RowCard";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type ProjectType = {
  thumbnail?: string;
  name: string;
  description?: string;
  url?: Url;
};

export default function ProjectSection() {
  const data: ProjectType[] = [
    {
      name: "autofit-canvas (npm library)",
      description:
        "NPM package to fit image dimension into canvas defined dimension without chaning image aspect ratio",
      thumbnail: "/assets/images/projects/autofit-canvas.png",
      url: "https://www.npmjs.com/package/autofit-canvas",
    },
    {
      name: "React WPM Counter",
      description: "React application to calculate user’s typing speed",
      thumbnail: "/assets/images/projects/react-wpm-counter.png",
      url: "https://asharifauzan.github.io/react-wpm-counter",
    },
    {
      name: "React Math Quiz",
      description:
        "Simple React math quiz application to choose correct answers in 30 seconds",
      thumbnail: "/assets/images/projects/react-math-quiz.png",
      url: "https://gitlab.com/asharifauzan/react-math-quiz",
    },
  ];

  return (
    <section id="projects" className="space-y-2">
      <h2 className="section-title">Projects ✨</h2>
      <div className="space-y-5">
        {data.map((row) => (
          <article
            key={row.name}
            className="project-item row-hover-focus -mx-2.5 p-2.5"
          >
            <RowCard thumbnail={row.thumbnail}>
              <p className="subsection-title">{row.name}</p>
              <p className="text-description">{row.description}</p>
              <Link
                className="text-blue-600 hover:text-blue-700"
                href={row.url as Url}
                target="_blank"
              >
                {row.url as string}
              </Link>
            </RowCard>
          </article>
        ))}
      </div>
    </section>
  );
}
