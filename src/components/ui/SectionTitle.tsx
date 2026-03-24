interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <h3 className="font-apercu text-[0.9rem] tracking-[0.24em] uppercase text-primary mb-4">
        {title}
      </h3>
    </div>
  );
}
