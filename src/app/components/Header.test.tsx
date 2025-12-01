import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react'
import Header from './Header';


describe("The Header Component...", () => {

  test('...renders correctly', () => {
    expect(() => render(<Header />)).not.toThrow();
  })

  test("...renders the logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  })

})
