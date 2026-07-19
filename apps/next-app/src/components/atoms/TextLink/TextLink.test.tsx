import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextLink } from "./TextLink";

describe("TextLink", () => {
  it("renders an anchor pointing to the given href with its label", () => {
    render(<TextLink href="/esqueci-a-senha">Esqueci a senha</TextLink>);

    const link = screen.getByRole("link", { name: "Esqueci a senha" });
    expect(link).toHaveAttribute("href", "/esqueci-a-senha");
  });
});
