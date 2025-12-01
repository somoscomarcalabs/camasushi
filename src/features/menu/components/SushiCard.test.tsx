import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import SushiCard from '@/features/menu/components/SushiCard';

describe("SushiCard", () => {

  const mockSushi = {
    id: 1,
    name: "Roll de Pacú",
    description: "description text",
    is_fried: false,
    type: "Roll",
    price: 1000,
    image: '/images/pacu.jpg'
  };

  test("It renders the sushi name", () => {
    render(<SushiCard sushi={mockSushi} />)
    expect(screen.getByText(/roll de pacú/i)).toBeInTheDocument();
  });

  test("It renders the sushi ingredients", () => {
    render(<SushiCard sushi={mockSushi} />)
    expect(screen.getByText(/description text/i)).toBeInTheDocument();
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

});

test("SushiCard renders the 'Rebozado' badge when is_fried is true", () => {
  const mockSushi = {
    id: 1,
    name: "Roll de Pacú",
    description: "description text",
    is_fried: true,
    type: "Roll",
    price: 1000,
    image: '/images/pacu.jpg'
  };
  render(<SushiCard sushi={mockSushi} />);
  expect(screen.getByText(/rebozado/i)).toBeInTheDocument();
});



