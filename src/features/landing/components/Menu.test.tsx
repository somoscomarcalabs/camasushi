import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Menu from '@/features/landing/components/Menu';

describe("Menu component", () => {

  test("Renders the menu container", () => {
    render(<Menu items={[]} />);
    expect(screen.getByTestId("menu-container")).toBeInTheDocument();
  });

  test("Renders the correct number of items", () => {
    const mockItems = [
      { id: 1, name: "Pacú" },
      { id: 2, name: "Salmón" }
    ]
    render(<Menu items={mockItems} />);
    expect(screen.getAllByTestId("menu-item")).toHaveLength(2);
  });

});


