import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  alternate?: boolean;
}

const Section = ({ children, className, id, alternate }: SectionProps) => (
  <section
    id={id}
    className={cn(
      "py-16 md:py-24 px-4",
      alternate ? "bg-muted" : "bg-background",
      className
    )}
  >
    <div className="container mx-auto max-w-5xl">{children}</div>
  </section>
);

export default Section;
