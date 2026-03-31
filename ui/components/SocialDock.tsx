"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { SocialIcon } from "react-social-icons";
import type { Social } from "@/payload-types";

interface Props {
  links: Social["socialLinks"]
}

export default function SocialDock({ links }: Props) {
  return (
    <div className="relative lg:mt-48">
      <Dock direction="top" iconSize={40}>
        {links?.map(({ label, icon, url }) => (
          <DockIcon key={label}>
            <div>
              <SocialIcon
                title={label || ""}
                label={label || ""}
                network={icon || ""}
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
