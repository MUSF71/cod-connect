import { Checkbox } from "@/components/atoms/Checkbox/Checkbox";
import { TextLink } from "@/components/atoms/TextLink/TextLink";

export interface RememberForgotProps {
  remember: boolean;
  onRememberChange: (remember: boolean) => void;
  forgotPasswordHref?: string;
}

/** "Lembrar-me" checkbox + "Esqueci a senha" link row. */
export function RememberForgot({
  remember,
  onRememberChange,
  forgotPasswordHref = "#",
}: RememberForgotProps) {
  return (
    <div className="flex items-center justify-between">
      <Checkbox
        id="remember-me"
        label="Lembrar-me"
        checked={remember}
        onChange={(e) => onRememberChange(e.target.checked)}
      />
      <TextLink href={forgotPasswordHref}>Esqueci a senha</TextLink>
    </div>
  );
}
