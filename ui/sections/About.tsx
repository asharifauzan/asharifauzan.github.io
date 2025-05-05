"use client";

import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { motion } from "motion/react";
import ParticlesBackground from "../components/ParticlesBackground";
import SocialsDock from "../components/SocialDock";

export default function AboutSection() {
  const professions: string[] = [
    "Frontend Developer",
    "Reactjs",
    "Nextjs",
    "Vuejs",
    "React Native",
    "Flutter",
    "Lifetime learner",
  ];

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
    <header>
      <ParticlesBackground>
        <div className="container mx-auto px-8 py-24">
          <p className="mb-8 font-bold text-4xl">
            Hi <span className="inline-block animate-wave">👋</span> my name is
          </p>
          <AuroraMotion
            colors={colors}
            className="font-bold text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fauzan Hibatullah Ashari
          </AuroraMotion>
          <WordRotate
            className="mb-8 text-8xl opacity-50 text-slate-300"
            words={professions}
          />
          <motion.p
            className="text-xl text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            4+ years experienced Frontend Developer specialized in web
            application (React/Nextjs/Vuejs) and mobile application (React
            Native/Flutter).
          </motion.p>
          <SocialsDock />
        </div>
      </ParticlesBackground>
    </header>
  );
}
