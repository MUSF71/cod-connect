"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/atoms/Button/Button";
import { Checkbox } from "@/components/atoms/Checkbox/Checkbox";
import { TextLink } from "@/components/atoms/TextLink/TextLink";
import { FormField } from "@/components/molecules/FormField/FormField";
import { SocialLogins } from "@/components/molecules/SocialLogins/SocialLogins";

export interface SignupFormProps {
  onSubmit?: (values: {
    name: string;
    email: string;
    password: string;
    remember: boolean;
  }) => void;
}

/**
 * The signup-specific half of the auth screen: heading, name/email/password
 * fields, remember-me checkbox, submit button and social/footer links.
 * Mirrors `LoginForm`'s shape while reusing `FormField`, `Checkbox`, `Button`
 * and `SocialLogins` as-is.
 */
export function SignupForm({ onSubmit }: SignupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.({ name, email, password, remember });
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-50">Cadastro</h1>
        <p className="mt-2 text-zinc-300">Olá! Preencha seus dados.</p>
      </div>

      <div className="flex flex-col gap-4">
        <FormField
          id="name"
          label="Nome"
          placeholder="Nome completo"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="Digite seu email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          id="password"
          label="Senha"
          type="password"
          placeholder="••••••"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Checkbox
        id="remember-me"
        label="Lembrar-me"
        checked={remember}
        onChange={(e) => setRemember(e.target.checked)}
      />

      <Button type="submit" icon={<span aria-hidden>→</span>}>
        Cadastrar
      </Button>

      <SocialLogins />

      <p className="text-center text-sm text-zinc-300">
        Já tem conta?{" "}
        <TextLink href="/login" variant="brand" icon={<span aria-hidden>→</span>}>
          Faça seu login!
        </TextLink>
      </p>
    </form>
  );
}
