"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/atoms/Button/Button";
import { TextLink } from "@/components/atoms/TextLink/TextLink";
import { FormField } from "@/components/molecules/FormField/FormField";
import { RememberForgot } from "@/components/molecules/RememberForgot/RememberForgot";
import { SocialLogins } from "@/components/molecules/SocialLogins/SocialLogins";

export interface LoginFormProps {
  onSubmit?: (values: { identifier: string; password: string; remember: boolean }) => void;
}

/**
 * The login-specific half of the auth screen: heading, credential fields,
 * remember/forgot row, submit button and social/footer links. A future
 * `SignupForm` mirrors this shape (own heading + fields) while reusing
 * `FormField`, `Button` and `SocialLogins` as-is.
 */
export function LoginForm({ onSubmit }: LoginFormProps) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.({ identifier, password, remember });
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-50">Login</h1>
        <p className="mt-2 text-zinc-300">Boas-vindas! Faça seu login.</p>
      </div>

      <div className="flex flex-col gap-4">
        <FormField
          id="identifier"
          label="Email ou usuário"
          placeholder="usuario123"
          autoComplete="username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <FormField
          id="password"
          label="Senha"
          type="password"
          placeholder="••••••"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <RememberForgot
        remember={remember}
        onRememberChange={setRemember}
        forgotPasswordHref="/esqueci-a-senha"
      />

      <Button type="submit" icon={<span aria-hidden>→</span>}>
        Login
      </Button>

      <SocialLogins />

      <p className="text-center text-sm text-zinc-300">
        Ainda não tem conta?{" "}
        <TextLink href="/cadastro" variant="brand" icon={<span aria-hidden>📋</span>}>
          Crie seu cadastro!
        </TextLink>
      </p>
    </form>
  );
}
