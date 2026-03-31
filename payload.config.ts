import sharp from "sharp";
import { Educations } from "./collections/educations.collection";
import { Experiences } from "./collections/experiences.collection";
import { Projects } from "./collections/projects.collection";
import { Skills } from "./collections/skills.collection";
import { Skillsets } from "./collections/skillsets.collection";
import { About } from "./collections/global/about.global-collection";
import { Social } from "./collections/global/social.global-collection";
import { script as usersSeed } from "./seeders/users.seed";
import { script as aboutSeed } from "./seeders/global/about.global-seed";
import { script as SocialSeed } from "./seeders/global/social.global-seed";
import { script as educationsSeed } from "./seeders/educations.seed";
import { script as experiencesSeed} from "./seeders/experiences.seed";
import { script as projectsSeed } from "./seeders/projects.seed";
import { script as skillesSeed } from "./seeders/skills.seed";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

export default buildConfig({
  // initialize server setup
  onInit: async (payload) => {
    const adminRole = await payload.find({
      collection: "users",
      where: {
        email: {
          equals: "admin@example.com"
        }
      }
    })

    // seeding only when user's admin is not exists yet
    if (adminRole?.docs?.length === 0) {
      await usersSeed(payload)
      await aboutSeed(payload)
      await SocialSeed(payload)
      await educationsSeed(payload)
      await experiencesSeed(payload)
      await projectsSeed(payload)
      await skillesSeed(payload)
    }
  },

  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    Educations,
    Experiences,
    Projects,
    Skills,
    Skillsets,
  ],

  globals: [
    About,
    Social,
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",

  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),

  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
