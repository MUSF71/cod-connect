import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders the centered text between the two rule segments", () => {
    render(<Divider>ou entre com outras contas</Divider>);

    expect(screen.getByText("ou entre com outras contas")).toBeInTheDocument();
  });
});
