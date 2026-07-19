import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { AuthLayout } from "./AuthLayout";

describe("AuthLayout", () => {
  it("renders both the banner slot and the page-specific content", () => {
    render(
      <AuthLayout banner={<div data-testid="banner">banner</div>}>
        <div>form content</div>
      </AuthLayout>,
    );

    expect(screen.getByTestId("banner")).toBeInTheDocument();
    expect(screen.getByText("form content")).toBeInTheDocument();
  });
});
