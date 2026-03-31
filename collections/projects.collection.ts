import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  fields: [
    {
      name: "projectName",
      type: "text"
    },
    {
      name: "description",
      type: "textarea"
    },
    {
      name: "cover",
      type: "text",
    },
    {
      name: "url",
      type: "text"
    }
  ]
}