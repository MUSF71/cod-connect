import type { InputHTMLAttributes } from "react";
import { Label } from "@/components/atoms/Label/Label";
import { Input } from "@/components/atoms/Input/Input";

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

/**
 * Label + Input pair. This is the reusable building block for any auth form
 * field (login's "Email ou usuário"/"Senha" today, signup's extra fields
 * later) — new forms just render more `FormField`s, nothing here changes.
 */
export function FormField({ id, label, ...inputProps }: FormFieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...inputProps} />
    </div>
  );
}
