import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import Header from './Header';


test('The Header component renders correctly', () => {
  expect(() => render(<Header />)).not.toThrow();
})

test("renders the logo", () => {
  render(<Header />);
  const logo = screen.getByAltText("Logo");
  expect(logo).toBeInTheDocument();
})
