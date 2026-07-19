import type { Metadata } from "next";
import { AuthBanner } from "@/components/organisms/AuthBanner/AuthBanner";
import { LoginForm } from "@/components/organisms/LoginForm/LoginForm";
import { AuthLayout } from "@/components/templates/AuthLayout/AuthLayout";

export const metadata: Metadata = {
  title: "Login | Code Connect",
};

// TODO: /Login.png is a screenshot of the whole login mockup, not a cropped
// banner asset. Swap for the real cropped banner image (e.g. /banner-login.png)
// once it's available.
export default function LoginPage() {
  return (
    <AuthLayout
      banner={<AuthBanner src="/Login.png" alt="Code Connect" />}
    >
      <LoginForm />
    </AuthLayout>
  );
}
