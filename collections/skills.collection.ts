import type { CollectionConfig } from "payload";

export const Skills: CollectionConfig = {
  slug: "skills",
  fields: [
    {
      name: "skills",
      type: "relationship",
      relationTo: "skillsets",
    },
    {
      name: "skillName",
      label: "Skill Name",
      type: "text"
    }
  ]
}