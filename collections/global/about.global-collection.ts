import type { GlobalConfig } from "payload";

export const About: GlobalConfig = {
  slug: "about",
  fields: [
    {
      name: "fullname",
      type: "text",
      required: true
    },
    {
      name: "description",
      type: "textarea",
      required: true
    },
    {
      name: "highlightedSkills",
      type: "array",
      required: true,
      fields: [
        {
          name: "skill",
          type: "text",
          required: true
        }
      ]
    }
  ]
}