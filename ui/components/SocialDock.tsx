"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { SocialIcon } from "react-social-icons";
import { type Url } from "next/dist/shared/lib/router/router";

type SocialType = {
  label: string;
  icon: string;
  url: Url;
};

export default function SocialDock() {
  const data: SocialType[] = [
    {
      label: "Linkedin",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/fauzan-hibatullah-ashari",
    },
    {
      label: "Github",
      icon: "github",
      url: "https://github.com/asharifauzan",
    },
    {
      label: "Gitlab",
      icon: "gitlab",
      url: "https://gitlab.com/asharifauzan",
    },
    {
      label: "Email",
      icon: "email",
      url: "mailto:asharifauzan.h@gmail.com",
    },
    {
      label: "Blog",
      icon: "rss",
      url: "https://fauzanashariblog.blogspot.com",
    },
  ];

  return (
    <div className="relative mt-48">
      <Dock direction="top" iconSize={40}>
        {data.map(({ label, icon, url }) => (
          <DockIcon key={label}>
            <div>
              <SocialIcon
                title={label}
                label={label}
                network={icon}
                style={{ width: 40, height: 40 }}
                url={url as string}
                target="_blank"
              />
            </div>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
