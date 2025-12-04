import { test, expect, describe } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import SushiCard from '@/features/menu/components/SushiCard';

describe("SushiCard", () => {

  const mockSushi = {
    id: 1,
    name: "Roll de Pacú",
    ingredients: ["ingredient-1", "ingredient-2"],
    description: "description",
    is_fried: true,
    price: 1000,
    image: '/images/pacu.jpg',
    pieces: 5
  };

  test("It renders the sushi name", () => {
    render(<SushiCard sushi={mockSushi} />)
    expect(screen.getByText(/roll de pacú/i)).toBeInTheDocument();
  });

  test("It renders the sushi description", () => {
    render(<SushiCard sushi={mockSushi} />);
    const container = screen.getByTestId("sushi-description");
    expect(container).toBeInTheDocument();
    expect(() => within(container).getByText("description")).not.toThrow()
  })

  test("It renders the sushi ingredients only on hover", () => {
    render(<SushiCard sushi={mockSushi} />)
    const sushiCard = screen.getByTestId("sushi-card");
    fireEvent.mouseOver(sushiCard)
    expect(screen.getByText(/ingredient-1, ingredient-2/i)).toBeInTheDocument();
  });

  test("It renders the sushi image with the correct alt text", () => {
    render(<SushiCard sushi={mockSushi} />);
    expect(screen.getByAltText(/roll de pacú/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: new RegExp(/roll de pacú/i) })).toBeInTheDocument();
  });

  test("It renders the sushi price formatted correctly", () => {
    render(<SushiCard sushi={mockSushi} />);
    expect(screen.getByText("$1.000")).toBeInTheDocument();
  });

  test("It renders the 'HOT ROLL' badge when is_fried is true", () => {
    render(<SushiCard sushi={mockSushi} />);
    expect(screen.getByText(/hot roll/i)).toBeInTheDocument();
  });

  test("It renders the serving size", () => {
    render(<SushiCard sushi={mockSushi} />);
    expect(screen.getByText(/x5/i)).toBeInTheDocument();
  });

});
