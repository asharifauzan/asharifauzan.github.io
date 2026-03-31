import React from "react";
import { getPayload } from "payload";
import { periodDateString } from "@/helpers/date-format";
import config from "@payload-config";

const formatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
};

export default async function EducationSection() {
  const payload = await getPayload({ config });
  const { docs: data } = await payload.find({
    collection: "educations",
    sort: "-endDate",
  });

  return (
    <section id="education">
      <h3 className="section-title">Education 🎓</h3>
      <div className="-mx-2.5 p-2.5 space-y-2">
        {data.map((row) => (
          <div key={row.id} className="education-item">
            <h4 className="article-title">{row.institutionName}</h4>
            <p className="text-description">{row.major}</p>
            <p className="subarticle-title">
              {periodDateString(
                row.startDate || "",
                row.endDate || "",
                formatOptions,
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
