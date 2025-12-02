import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '@/features/landing/components/Hero';

test("Hero renders the section container", () => {
  render(<Hero />);
  expect(screen.getByTestId("hero-section")).toBeInTheDocument()
});

test("Hero renders the main heading with correct text", () => {
  render(<Hero />);
  expect(screen.getByRole('heading', { level: 1, name: /sushi/i })).toBeInTheDocument()
});
