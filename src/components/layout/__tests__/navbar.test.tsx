import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { Navbar } from "../navbar";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next-themes", () => ({
  useTheme: () => ({ setTheme: vi.fn(), resolvedTheme: "light" }),
}));

vi.mock("../overlay-nav", () => ({
  OverlayNav: ({ open }: { open: boolean }) => (
    <div data-testid="overlay-nav" data-open={open} />
  ),
}));

describe("Navbar", () => {
  it("renders the wordmark", () => {
    render(<Navbar />);

    expect(screen.getByText("Anchor Mill Group")).toBeInTheDocument();
  });

  it("wordmark links to home page", () => {
    render(<Navbar />);

    const wordmark = screen.getByText("Anchor Mill Group");
    expect(wordmark.closest("a")).toHaveAttribute("href", "/");
  });

  it("renders the Menu button", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("button", { name: /open navigation menu/i })
    ).toBeInTheDocument();
  });

  it("renders the OverlayNav component", () => {
    render(<Navbar />);

    expect(screen.getByTestId("overlay-nav")).toBeInTheDocument();
  });
});
