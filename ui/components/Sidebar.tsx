import React from "react";
import SkillSection from "../sections/Skill";
import EducationSection from "../sections/Education";

export default function SidebarComponent({ className }: { className: string }) {
  return (
    <aside className={`${className} `}>
      <SkillSection />
      <EducationSection />
    </aside>
  );
}
