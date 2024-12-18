import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { describe, it } from "vitest";
import Professional from "./pages/Professional";

describe("Professional page", () => {
  it("should render Professional title", () => {
    render(<Professional />);
    const titleElement = screen.getByText(/Professional/i);
    expect(titleElement).toBeInTheDocument();
  });
});
