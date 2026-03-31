import type { GlobalConfig } from "payload";

export const Social: GlobalConfig = {
  slug: "social",
  fields: [
    {
      name: "socialLinks",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
        },
        {
          name: "icon",
          type: "text",
          admin: {
            description: "See available icons: https://react-social-icons.com",
          },
        },
        {
          name: "url",
          type: "text",
        },
      ],
    },
  ],
};
