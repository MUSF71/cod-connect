import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RememberForgot } from "./RememberForgot";

describe("RememberForgot", () => {
  it("reports the checkbox toggle and links to the forgot-password page", async () => {
    const user = userEvent.setup();
    const onRememberChange = vi.fn();

    render(
      <RememberForgot
        remember={false}
        onRememberChange={onRememberChange}
        forgotPasswordHref="/esqueci-a-senha"
      />,
    );

    await user.click(screen.getByLabelText("Lembrar-me"));
    expect(onRememberChange).toHaveBeenCalledWith(true);

    expect(screen.getByRole("link", { name: "Esqueci a senha" })).toHaveAttribute(
      "href",
      "/esqueci-a-senha",
    );
  });
});
