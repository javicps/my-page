import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { describe, it } from "vitest";
import Professional from "./pages/Professional";
import About from "./pages/About";

describe("Professional page", () => {
  it("should render Professional title", () => {
    render(<Professional />);
    const titleElement = screen.getByText(/Professional/i);
    expect(titleElement).toBeInTheDocument();
  });
});

describe("About page", () => {
  it("should render About title", () => {
    render(<About />);
    const titleElement = screen.getByText(/About me/i);
    expect(titleElement).toBeInTheDocument();
  });
});
