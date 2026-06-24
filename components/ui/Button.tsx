// ─── BUTTON COMPONENT ───

import Link from "next/link";
import type { ButtonProps } from "@/types";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-blue text-background hover:bg-brand-blue/90 rounded-btn px-6 py-3 text-sm font-semibold transition-colors",
  secondary:
    "border border-border bg-background text-text-dark hover:border-text-muted rounded-btn px-6 py-3 text-sm font-semibold transition-colors",
  ghost:
    "text-text-medium hover:text-text-dark rounded-card px-4 py-2 text-sm font-medium transition-colors",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const styles = `${variantStyles[variant]} inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} {...props}>
      {children}
    </button>
  );
}

// ─── END BUTTON ───
