import type { CollectionConfig } from "payload";

export const Educations: CollectionConfig = {
  slug: "educations",
  fields: [
    {
      name: "institutionName",
      label: "Institution Name",
      type: "text"
    },
    {
      name: "major",
      type: "text"
    },
    {
      name: "startDate",
      label: "Start Date",
      type: "date"
    },
    {
      name: "endDate",
      label: "End Date",
      type: "date"
    },
  ]
}