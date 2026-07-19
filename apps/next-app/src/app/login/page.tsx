import type { Metadata } from "next";
import { AuthBanner } from "@/components/organisms/AuthBanner/AuthBanner";
import { LoginForm } from "@/components/organisms/LoginForm/LoginForm";
import { AuthLayout } from "@/components/templates/AuthLayout/AuthLayout";

export const metadata: Metadata = {
  title: "Login | Code Connect",
};

export default function LoginPage() {
  return (
    <AuthLayout
      banner={<AuthBanner src="/auth-banner.png" alt="Code Connect" />}
    >
      <LoginForm />
    </AuthLayout>
  );
}
