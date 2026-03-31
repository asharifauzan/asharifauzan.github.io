import type { Payload } from "payload";

const data = [
  {
    "label": "Linkedin",
    "icon": "linkedin",
    "url": "https://www.linkedin.com/in/fauzan-hibatullah-ashari"
  },
  {
    "label": "Github",
    "icon": "github",
    "url": "https://github.com/asharifauzan"
  },
  {
    "label": "Gitlab",
    "icon": "gitlab",
    "url": "https://gitlab.com/asharifauzan"
  },
  {
    "label": "Email",
    "icon": "email",
    "url": "mailto:asharifauzan.h@gmail.com"
  },
  {
    "label": "Blog",
    "icon": "rss",
    "url": "https://fauzanashariblog.blogspot.com"
  }
]

export const script = async(payload: Payload) => {
  console.log("🌱 start seeding global social");

  await payload.updateGlobal({
    slug: "social",
    data: {
      socialLinks: data
    }
  })

  console.log("🌱 done seeding global social");
}
