import Image from "next/image";

export interface AuthBannerProps {
  src: string;
  alt: string;
}

/**
 * Left-column artwork for auth screens. `src`/`alt` are the only per-page
 * inputs — login and signup each pass their own image, everything else
 * (sizing, rounding, fill behavior) stays identical between them.
 */
export function AuthBanner({ src, alt }: AuthBannerProps) {
  return (
    <div className="relative hidden h-full min-h-[420px] w-full overflow-hidden rounded-2xl sm:block">
      <Image src={src} alt={alt} fill className="object-cover" priority />
    </div>
  );
}
