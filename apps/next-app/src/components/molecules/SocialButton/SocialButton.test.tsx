import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SocialButton } from "./SocialButton";

describe("SocialButton", () => {
  it("shows its label and calls onClick when pressed", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <SocialButton icon={<span>icon</span>} label="Github" onClick={onClick} />,
    );

    await user.click(screen.getByRole("button", { name: /github/i }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
