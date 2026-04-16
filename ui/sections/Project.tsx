import React from "react";
import RowCard from "../components/RowCard";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config"
import type { Url } from "next/dist/shared/lib/router/router";

export default async function ProjectSection() {
  const payload = await getPayload({ config })
  const { docs: data } = await payload.find({
    collection: "projects"
  })

  return (
    <section id="projects" className="space-y-2">
      <h2 className="section-title">Projects ✨</h2>
      <div className="space-y-5">
        {data.map((row) => (
          <article
            key={row.id}
            className="project-item row-hover-focus -mx-2.5 p-2.5"
          >
            <RowCard
              className="flex-col sm:flex-row"
              thumbnail={row.cover ?? ""}
            >
              <p className="subsection-title">{row.projectName}</p>
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
