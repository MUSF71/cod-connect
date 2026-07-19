import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormField } from "./FormField";

describe("FormField", () => {
  it("lets the user find the input by its label and type into it", async () => {
    const user = userEvent.setup();
    render(
      <FormField
        id="email"
        label="Email ou usuário"
        placeholder="usuario123"
      />,
    );

    const input = screen.getByLabelText("Email ou usuário");
    await user.type(input, "marcus");

    expect(input).toHaveValue("marcus");
  });
});
