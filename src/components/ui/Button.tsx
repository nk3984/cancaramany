import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-[var(--color-charcoal)] text-[var(--color-white)] hover:bg-[var(--color-deep-olive)]",
  secondary:
    "border border-[var(--color-charcoal)]/25 text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-white)]",
  ghost:
    "text-[var(--color-charcoal)] underline-offset-4 hover:underline",
  light:
    "border border-[var(--color-white)]/35 text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-charcoal)]",
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
