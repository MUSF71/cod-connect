import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface SocialButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
}

/** Icon + label control for one social login provider (Github, Google, ...). */
export function SocialButton({
  icon,
  label,
  className = "",
  type = "button",
  ...props
}: SocialButtonProps) {
  return (
    <button
      type={type}
      className={`flex flex-col items-center gap-2 text-zinc-300 hover:text-zinc-100 ${className}`}
      {...props}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
        {icon}
      </span>
      <span className="text-xs">{label}</span>
    </button>
  );
}
