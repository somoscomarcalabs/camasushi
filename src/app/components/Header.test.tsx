import { test, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import Header from './Header';


describe("The Header Component...", () => {

  beforeEach(() => {
    render(<Header />);
  })

  test('...renders correctly', () => {
    expect(() => render(<Header />)).not.toThrow();
  })

  test("...renders the logo", () => {
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  })

  test("...renders the desktop navigation element", () => {
    expect(screen.getByTestId('desktop-navigation')).toBeInTheDocument();
  })
})
