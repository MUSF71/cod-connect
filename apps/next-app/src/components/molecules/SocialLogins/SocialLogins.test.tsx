import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SocialLogins } from "./SocialLogins";

describe("SocialLogins", () => {
  it("triggers the matching callback for each provider button", async () => {
    const user = userEvent.setup();
    const onGithubClick = vi.fn();
    const onGoogleClick = vi.fn();

    render(
      <SocialLogins onGithubClick={onGithubClick} onGoogleClick={onGoogleClick} />,
    );

    await user.click(screen.getByRole("button", { name: /github/i }));
    await user.click(screen.getByRole("button", { name: /gmail/i }));

    expect(onGithubClick).toHaveBeenCalledTimes(1);
    expect(onGoogleClick).toHaveBeenCalledTimes(1);
  });
});
