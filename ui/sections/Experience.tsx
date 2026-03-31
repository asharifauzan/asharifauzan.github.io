import React from "react";
import { getPayload } from "payload";
import { periodDateString } from "@/helpers/date-format";
import config from "@payload-config";

const formatOptions: Intl.DateTimeFormatOptions = {
  month: "long",
  year: "numeric",
};

export default async function ExperiencesSection() {
  const payload = await getPayload({ config });
  const { docs: data } = await payload.find({
    collection: "experiences",
    sort: "-startDate",
  });

  return (
    <section id="experiences" className="space-y-2 mb-12">
      <h2 className="section-title">Experiences 💼</h2>
      <div className="space-y-5">
        {data.map((row) => (
          <article
            key={`${row.id}`}
            className="experience-item row-hover-focus -mx-2.5 p-2.5"
          >
            <h3 className="subsection-title">{row.company}</h3>
            <div className="space-y-3">
              <div className="relative pl-6 border-l-2 border-slate-500">
                {/* timeline dot */}
                <div className="absolute w-3 h-3 rounded-full top-[8px] left-[-7px] bg-slate-500"></div>
                <p className="article-title">
                  {row.position}
                  <span className="subarticle-title float-end">
                    🗓️{" "}
                    {periodDateString(
                      row.startDate || "",
                      row.endDate || "",
                      formatOptions,
                    )}
                  </span>
                </p>
                <p className="whitespace-pre-line">{row.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
