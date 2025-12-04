import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Menu from '@/features/landing/components/Menu';

test("Menu component renders the menu container", () => {
  render(<Menu items={[]} />);
  expect(screen.getByTestId("menu-container")).toBeInTheDocument();
});

test("Menu renders the correct number of items", () => {
  const mockItems = [
    { id: 1, name: "Pacú" },
    { id: 2, name: "Salmón" }
  ]
  render(<Menu items={mockItems} />);
  expect(screen.getAllByTestId("menu-item")).toHaveLength(2);
});
