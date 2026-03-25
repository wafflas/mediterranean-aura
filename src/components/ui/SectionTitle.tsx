import { ElementType } from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
  as?: ElementType;
}

export function SectionTitle({
  title,
  className = "",
  as: Component = "h2",
}: SectionTitleProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <Component className="font-apercu text-[0.9rem] tracking-[0.24em] uppercase text-primary mb-4">
        {title}
      </Component>
    </div>
  );
}
