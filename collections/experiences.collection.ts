import type { CollectionConfig } from "payload";

export const Experiences: CollectionConfig = {
  slug: "experiences",
  fields: [
    {
      name: "company",
      label: "Company Name",
      type: "text"
    },
    {
      name: "position",
      label: "Position",
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
      type: "date",
    },
    {
      name: "description",
      label: "Work description",
      type: "textarea"
    }
  ]
}