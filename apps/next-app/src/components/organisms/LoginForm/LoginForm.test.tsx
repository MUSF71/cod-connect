import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  it("submits the identifier, password and remember-me state the user entered", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<LoginForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText("Email ou usuário"), "usuario123");
    await user.type(screen.getByLabelText("Senha"), "hunter2");
    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(onSubmit).toHaveBeenCalledWith({
      identifier: "usuario123",
      password: "hunter2",
      remember: true,
    });
  });
});
