import { cn } from "@/lib/utils/cn";

type CardProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export const Card = ({ title, description, children, className }: CardProps) => {
  return (
    <section className={cn("ui-card", className)}>
      {title ? <h3 className="title-display text-[var(--scale-h2)] text-token-primary">{title}</h3> : null}
      {description ? <p className={cn(title ? "mt-2" : "", "text-token-secondary")}>{description}</p> : null}
      {children ? <div className={cn(title || description ? "mt-4" : "")}>{children}</div> : null}
    </section>
  );
};
