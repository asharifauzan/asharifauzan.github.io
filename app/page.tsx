import React from "react";

import AboutSection from "@/ui/sections/About";
import ExperienceSection from "@/ui/sections/Experience";
import ProjectsSection from "@/ui/sections/Project";
import SidebarComponent from "@/ui/components/Sidebar";
import GradientBackground from "@/ui/components/GradientBackground";

export default function HomePage() {
  return (
    <>
      <AboutSection />
      <main className="relative">
        {/* Absolute gradient background */}
        <GradientBackground />

        <div className="flex flex-col md:flex-row gap-8 w-4/5 mx-auto p-8">
          {/* Sidebar */}
          <div className="relative flex-2/6">
            <SidebarComponent className="sticky top-10" />
          </div>

          {/* Content */}
          <div className="relative flex-4/6">
            <ExperienceSection />
            <ProjectsSection />
          </div>
        </div>
      </main>
    </>
  );
}
