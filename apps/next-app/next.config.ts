import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack root to the pnpm workspace root (two levels up) so Next
  // stops inferring the wrong root from unrelated lockfiles elsewhere on the
  // machine, while still resolving hoisted deps like `next`.
  turbopack: {
    root: path.join(__dirname, "..", ".."),
  },
};

export default nextConfig;
