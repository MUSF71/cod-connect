import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignupForm } from "./SignupForm";

describe("SignupForm", () => {
  it("submits the name, email, password and remember-me state the user entered", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<SignupForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText("Nome"), "Marcus Silva");
    await user.type(screen.getByLabelText("Email"), "marcus@example.com");
    await user.type(screen.getByLabelText("Senha"), "hunter2");
    await user.click(screen.getByRole("button", { name: "Cadastrar" }));

    expect(onSubmit).toHaveBeenCalledWith({
      name: "Marcus Silva",
      email: "marcus@example.com",
      password: "hunter2",
      remember: true,
    });
  });
});
