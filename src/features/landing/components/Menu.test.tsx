import { test, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Menu from '@/features/landing/components/Menu';
import { SushiItem, MenuCategory } from '@/types/Menu';

vi.mock('@/features/menu/components/SushiCard', () => ({
  default: ({ sushi }: { sushi: SushiItem }) => (
    <div data-testid="mock-sushi-card">
      {sushi.name}
    </div>
  )
}));

describe("Menu component", () => {

  const mockCategories: MenuCategory[] = [
    {
      name: "Pacú",
      items: [
        {
          id: 1,
          name: "Roll de Pacú",
          ingredients: ["Pacú", "queso"],
          description: "Description",
          is_fried: true,
          price: 5000,
          image: "/img.jpg",
          pieces: 5
        }
      ]
    },
    {
      name: "Langostinos",
      items: [
        {
          id: 2,
          name: "Atun",
          ingredients: ["Atún", "queso"],
          description: "Description",
          is_fried: false,
          price: 1000,
          image: "/img.jpg",
          pieces: 5

        }
      ]
    }
  ]

  test("Renders the menu container", () => {
    render(<Menu categories={[]} />);
    expect(screen.getByTestId("menu-container")).toBeInTheDocument();
  });

  test("Renders the correct number of items", () => {
    render(<Menu categories={mockCategories} />);
    expect(screen.getAllByTestId("menu-item")).toHaveLength(2);
  });

  test("Renders a SushiCard for each item", () => {
    render(<Menu categories={mockCategories} />)
    expect(screen.getAllByTestId("mock-sushi-card")).toHaveLength(2);
    expect(screen.getAllByTestId("mock-sushi-card")[0]).toHaveTextContent("Pacú");
  });
});
