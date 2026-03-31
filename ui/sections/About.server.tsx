import React from "react";
import AboutSection from "./About";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function AboutServerSection() {
  const payload = await getPayload({ config });
  const bio = await payload.findGlobal({ slug: "about" });
  const social = await payload.findGlobal({ slug: "social" });

  return (
    <AboutSection
      bio={bio}
      socials={social?.socialLinks}
    />
  )
}
