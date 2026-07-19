import type { LabelHTMLAttributes } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

/** Field label used above inputs across auth forms. */
export function Label({ className = "", children, ...props }: LabelProps) {
  return (
    <label
      className={`mb-2 block text-sm text-zinc-200 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}
