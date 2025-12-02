import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '@/features/landing/components/Hero';

describe("Hero", () => {

  test("Renders the section container", () => {
    render(<Hero />);
    expect(screen.getByTestId("hero-section")).toBeInTheDocument()
  });

  test("Renders the main heading with correct text", () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1, name: /sushi/i })).toBeInTheDocument()
  });

  test("Renders the description paragraph", () => {
    render(<Hero />);
    expect(screen.getByText(/ingredientes frescos/i)).toBeInTheDocument();
  });

});

test("hero renders the call-to-action link pointing to the menu", () => {
  render(<Hero />);
  expect(screen.getByRole('link', { name: /mirá nuestro menú/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /mirá nuestro menú/i })).toHaveAttribute('href', '#menu')
});
