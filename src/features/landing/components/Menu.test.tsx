import { test, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Menu from '@/features/landing/components/Menu';
import { SushiItem } from '@/types/Menu';

vi.mock('@/features/menu/components/SushiCard', () => ({
  default: ({ sushi }: { sushi: SushiItem }) => (
    <div data-testid="mock-sushi-card">
      {sushi.name}
    </div>
  )
}));

describe("Menu component", () => {

  test("Renders the menu container", () => {
    render(<Menu items={[]} />);
    expect(screen.getByTestId("menu-container")).toBeInTheDocument();
  });

  test("Renders the correct number of items", () => {
    const mockItems = [
      { name: "Pacú" },
      { name: "Atún" }
    ] as SushiItem[];

    render(<Menu items={mockItems} />);
    expect(screen.getAllByTestId("menu-item")).toHaveLength(2);
  });

  test("Renders a SushiCard for each item", () => {
    const mockItems: SushiItem[] = [
      {
        id: 1,
        name: "Pacú",
        ingredients: ["Pacú", "queso"],
        description: "Una pieza...",
        is_fried: true,
        price: 5300,
        image: "/images/pacu.jpg",
        pieces: 5
      },
    ]
    render(<Menu items={mockItems} />)
    expect(screen.getByTestId("mock-sushi-card")).toBeInTheDocument();
    expect(screen.getByTestId("mock-sushi-card")).toHaveTextContent("Pacú");
  });
});
