import React from "react";

import AboutServerSection from "@/ui/sections/About.server";
import EducationSection from "@/ui/sections/Education";
import ExperienceSection from "@/ui/sections/Experience";
import ProjectsSection from "@/ui/sections/Project";
import SkillSection from "@/ui/sections/Skill";
import SidebarComponent from "@/ui/components/Sidebar";
import GradientBackground from "@/ui/components/GradientBackground";

export default function HomePage() {
  return (
    <>
      <header>
        <AboutServerSection />
      </header>
      <main className="relative">
        {/* Absolute gradient background */}
        <GradientBackground />

        <div className="flex flex-col md:flex-row gap-8 w-11/12 lg:w-8/12 mx-auto p-2 lg:p-8">
          {/* Sidebar */}
          <div className="relative flex-2/6">
            <SidebarComponent className="sticky top-10">
              <SkillSection />
              <EducationSection />
            </SidebarComponent>
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
