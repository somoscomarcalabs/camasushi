import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Menu from '@/features/landing/components/Menu';

test("Menu component renders the menu container", () => {
  render(<Menu />);
  expect(screen.getByTestId("menu-container")).toBeInTheDocument();
});
