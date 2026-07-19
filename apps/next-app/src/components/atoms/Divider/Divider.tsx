import type { ReactNode } from "react";

export interface DividerProps {
  children: ReactNode;
}

/** Horizontal rule with centered text, e.g. "ou entre com outras contas". */
export function Divider({ children }: DividerProps) {
  return (
    <div className="flex items-center gap-4 text-xs text-zinc-400">
      <span className="h-px flex-1 bg-white/10" aria-hidden />
      {children}
      <span className="h-px flex-1 bg-white/10" aria-hidden />
    </div>
  );
}
