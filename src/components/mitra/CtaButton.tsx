import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  href: string;
}

const CtaButton = forwardRef<HTMLAnchorElement, CtaButtonProps>(
  ({ className, variant = "primary", size = "default", children, href, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all duration-300 text-center",
          variant === "primary" &&
            "bg-primary text-primary-foreground hover:brightness-110 shadow-[var(--shadow-cta)] animate-pulse-glow",
          variant === "secondary" &&
            "bg-secondary text-secondary-foreground hover:brightness-110",
          variant === "outline" &&
            "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
          size === "default" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);
CtaButton.displayName = "CtaButton";

export default CtaButton;
