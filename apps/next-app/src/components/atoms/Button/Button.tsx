import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon rendered after the label, e.g. an arrow. */
  icon?: ReactNode;
}

/**
 * Primary brand button (solid green, per the auth screens). Reused by any
 * form that needs a main call-to-action (login, signup, ...).
 */
export function Button({
  children,
  icon,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 font-semibold text-brand-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}
