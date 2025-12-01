import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SushiCard from '@/features/menu/components/SushiCard';

test("SushiCard renders the sushi name", () => {
  const mockSushi = {
    id: 1,
    name: "Roll de Pacú",
    description: "description text",
    is_fried: false,
    type: "Roll",
    price: 1000
  }
  render(<SushiCard sushi={mockSushi} />)
  expect(screen.getByText(/roll de pacú/i)).toBeInTheDocument();
});
