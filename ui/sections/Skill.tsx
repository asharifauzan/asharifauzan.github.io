import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Skillset } from "@/payload-types";

export default async function SkillSection() {
  const payload = await getPayload({ config })
  const { docs: skills } = await payload.find({
    collection: "skills",
    limit: 1000
  })

  // TODO: needs refactor
  const reducedSkills = skills.reduce((acc: Record<string, string[]>, curr) => {
    const skill = curr.skills as Skillset
    if (skill.skillsetName) {
      acc[skill.skillsetName] = [...(acc[skill.skillsetName] || []), curr.skillName] as string[]
    }
    return acc
  }, {})

  const data = Object.entries(reducedSkills)
  
  return (
    <section id="skills" className="mb-6">
      <h3 className="section-title">Skills 🛠️</h3>
      <div className="-mx-2.5 p-2.5 space-y-2">
        {data.map(([key, row]) => (
          <div key={key} className="skill-item">
            <h4 className="article-title">{key}</h4>
            <p className="text-description">{row.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
