import { forwardRef, type InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

/** Styled text input shared by every field across auth forms. */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ className = "", ...props }, ref) {
    return (
      <input
        ref={ref}
        className={`w-full rounded-lg bg-surface-muted/30 px-4 py-3 text-zinc-100 placeholder-zinc-400 outline-none ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-brand ${className}`}
        {...props}
      />
    );
  },
);
