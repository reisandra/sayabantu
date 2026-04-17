import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

const SectionTitle = ({ title, subtitle, className, center = true }: SectionTitleProps) => (
  <div className={cn("mb-12", center && "text-center", className)}>
    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionTitle;
