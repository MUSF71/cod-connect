import { useState } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";

function ControlledCheckbox() {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      id="remember"
      label="Lembrar-me"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}

describe("Checkbox", () => {
  it("toggles when the user clicks its label", async () => {
    const user = userEvent.setup();
    render(<ControlledCheckbox />);

    const checkbox = screen.getByLabelText("Lembrar-me");
    expect(checkbox).toBeChecked();

    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});
