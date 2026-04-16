"use client";

import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { motion } from "motion/react";
import ParticlesBackground from "../components/ParticlesBackground";
import SocialsDock from "../components/SocialDock";
import type { About, Social } from "@/payload-types";

interface Props {
  bio: About
  socials: Social["socialLinks"]
}

export default function AboutSection({ bio, socials }: Props) {
  // destruct to flat string of array
  const highlightedSkills: string[] = bio?.highlightedSkills
    ?.map(({ skill }) => skill) || []

  const colors: string[] = [
    "#43d4e4",
    "#3cc1e5",
    "#35ace6",
    "#2f95e6",
    "#287ce7",
    "#2162e8",
    "#1a46e9",
    "#1429e9",
  ];

  const AuroraMotion = motion.create(AuroraText);

  return (
    <ParticlesBackground>
      <div className="w-11/12 xl:max-w-8/12 mx-auto px-2 lg:px-8 py-8 lg:pt-24 lg:pb-4">
        <p className="mb-8 font-bold text-2xl lg:text-4xl">
          Hi <span className="inline-block animate-wave">👋</span> my name is
        </p>
        <AuroraMotion
          colors={colors}
          className="font-bold text-6xl xl:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {bio?.fullname}
        </AuroraMotion>
        <WordRotate
          className="mb-8 text-4xl xl:text-8xl opacity-50 text-slate-300"
          words={highlightedSkills}
        />
        <motion.p
          className="xl:text-lg text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {bio?.description}
        </motion.p>
        <SocialsDock links={socials || []} />
      </div>
    </ParticlesBackground>
  );
}
