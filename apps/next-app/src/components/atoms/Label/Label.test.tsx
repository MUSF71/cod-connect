import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
  it("associates its text with the given form control via htmlFor", () => {
    render(
      <>
        <Label htmlFor="email">Email ou usuário</Label>
        <input id="email" />
      </>,
    );

    expect(
      screen.getByLabelText("Email ou usuário"),
    ).toBeInstanceOf(HTMLInputElement);
  });
});
