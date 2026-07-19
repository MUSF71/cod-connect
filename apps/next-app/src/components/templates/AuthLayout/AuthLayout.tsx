import type { ReactNode } from "react";

export interface AuthLayoutProps {
  /** Left-column artwork, e.g. an `AuthBanner`. */
  banner: ReactNode;
  /** Right-column content, e.g. a `LoginForm` or a future `SignupForm`. */
  children: ReactNode;
}

/**
 * Shared shell for every auth screen: dark page background, decorative
 * corner marks, and a centered two-column card. Login and signup both
 * render this template unchanged — only the `banner` and `children` slots
 * differ between them.
 */
export function AuthLayout({ banner, children }: AuthLayoutProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-page px-4 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-[3rem] border-[3rem] border-white/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-[3rem] border-[3rem] border-white/5"
      />

      <div className="relative grid w-full max-w-4xl gap-8 rounded-3xl bg-surface/60 p-6 shadow-2xl ring-1 ring-white/10 sm:grid-cols-2 sm:p-8">
        {banner}
        <div className="flex items-center">{children}</div>
      </div>
    </main>
  );
}
