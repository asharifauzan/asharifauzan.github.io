import React, { type PropsWithChildren } from "react";

export default function SidebarComponent({
  className,
  children,
}: PropsWithChildren<{ className: string }>) {
  return (
    <aside className={`${className} `}>
      {children}
    </aside>
  );
}
