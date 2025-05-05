import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";

export default function RowCard({
  className = "",
  thumbnail,
  children,
}: PropsWithChildren<{
  className?: string;
  thumbnail?: string | StaticImport;
}>) {
  return (
    <div className={`flex gap-5 ${className}`}>
      <div className="thumbnail flex-2/6">
        {thumbnail && (
          <div className="py-2">
            <Image src={thumbnail} alt="project" width={400} height={400} />
          </div>
        )}
      </div>
      <div className="flex-4/6">{children}</div>
    </div>
  );
}
