import type { ReactNode } from "react";
import Link, { type LinkProps } from "next/link";

export interface TextLinkProps extends LinkProps {
  children: ReactNode;
  icon?: ReactNode;
  /**
   * `muted` — small underlined text (e.g. "Esqueci a senha").
   * `brand` — bold brand-colored text (e.g. "Crie seu cadastro!").
   */
  variant?: "muted" | "brand";
  className?: string;
}

export function TextLink({
  children,
  icon,
  variant = "muted",
  className = "",
  ...props
}: TextLinkProps) {
  const variantClass =
    variant === "brand"
      ? "font-semibold text-brand hover:opacity-90"
      : "text-sm text-zinc-300 underline hover:text-zinc-100";

  return (
    <Link
      className={`inline-flex items-center gap-1 ${variantClass} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </Link>
  );
}
