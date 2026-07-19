import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { GoogleIcon } from "./GoogleIcon";

describe("GoogleIcon", () => {
  it("renders an svg mark", () => {
    const { container } = render(<GoogleIcon data-testid="google-icon" />);

    expect(container.querySelector("svg[data-testid='google-icon']")).toBeInTheDocument();
  });
});
