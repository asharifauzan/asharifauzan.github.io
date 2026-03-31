import type { CollectionConfig } from "payload";

export const Skillsets: CollectionConfig = {
  slug: "skillsets",
  admin: {
    useAsTitle: "skillsetName"
  },
  fields: [
    {
      name: "skillsetName",
      label: "Skillset Name",
      type: "text",
    }
  ]
}