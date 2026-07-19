import type { Metadata } from "next";
import { AuthBanner } from "@/components/organisms/AuthBanner/AuthBanner";
import { SignupForm } from "@/components/organisms/SignupForm/SignupForm";
import { AuthLayout } from "@/components/templates/AuthLayout/AuthLayout";

export const metadata: Metadata = {
  title: "Cadastro | Code Connect",
};

export default function CadastroPage() {
  return (
    <AuthLayout
      banner={<AuthBanner src="/auth-banner.png" alt="Code Connect" />}
    >
      <SignupForm />
    </AuthLayout>
  );
}
