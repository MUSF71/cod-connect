import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { GithubIcon } from "./GithubIcon";

describe("GithubIcon", () => {
  it("renders an svg mark", () => {
    const { container } = render(<GithubIcon data-testid="github-icon" />);

    expect(container.querySelector("svg[data-testid='github-icon']")).toBeInTheDocument();
  });
});
