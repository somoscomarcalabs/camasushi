import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '@/features/landing/components/Hero';

test("Hero renders the section container", () => {
  render(<Hero />);
  expect(screen.getByTestId("hero-section")).toBeInTheDocument()
})
