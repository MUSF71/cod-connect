import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { AuthBanner } from "./AuthBanner";

describe("AuthBanner", () => {
  it("renders the given image with its alt text", () => {
    render(<AuthBanner src="/Login.png" alt="Code Connect login banner" />);

    expect(screen.getByAltText("Code Connect login banner")).toHaveAttribute(
      "src",
      expect.stringContaining("Login.png"),
    );
  });
});
