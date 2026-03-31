import type { Payload } from "payload";

export const script = async(payload: Payload) => {
  console.log("🌱 start seeding users");

  await payload.create({
    collection: "users",
    data: {
      email: String(process.env.PAYLOAD_ADMIN_EMAIL),
      password: String(process.env.PAYLOAD_ADMIN_PASSWORD)
    }
  })

  console.log("🌱 done seeding users");
}