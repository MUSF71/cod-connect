import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  it("lets the user type into it and reports the value via onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <Input aria-label="Email ou usuário" onChange={onChange} value="" />,
    );

    await user.type(screen.getByLabelText("Email ou usuário"), "a");

    expect(onChange).toHaveBeenCalled();
  });
});
