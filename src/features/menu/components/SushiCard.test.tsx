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
    price: 1000
  };

  test("It renders the sushi name", () => {
    render(<SushiCard sushi={mockSushi} />)
    expect(screen.getByText(/roll de pacú/i)).toBeInTheDocument();
  });

  test("It renders the sushi ingredients", () => {
    render(<SushiCard sushi={mockSushi} />)
    expect(screen.getByText(/description text/i)).toBeInTheDocument();
  });
})



