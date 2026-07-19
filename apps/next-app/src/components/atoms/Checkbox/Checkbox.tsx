import type { InputHTMLAttributes } from "react";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

/** Labeled checkbox, e.g. "Lembrar-me". */
export function Checkbox({ id, label, className = "", ...props }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="inline-flex select-none items-center gap-2 text-sm text-zinc-300"
    >
      <input
        id={id}
        type="checkbox"
        className={`h-4 w-4 rounded border-zinc-500 bg-transparent text-brand accent-brand focus:ring-brand ${className}`}
        {...props}
      />
      {label}
    </label>
  );
}
