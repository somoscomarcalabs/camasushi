import { test, expect, describe, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react'
import Header from './Header';


describe("Header Component behavior", () => {

  beforeEach(() => {
    render(<Header />);
  })

  test('It renders correctly', () => {
    expect(() => render(<Header />)).not.toThrow();
  })

  test("It renders the logo", () => {
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  })

  test("It renders the desktop navigation element", () => {
    expect(screen.getByTestId('desktop-navigation')).toBeInTheDocument();
  })

  describe("Mobile behavior", () => {
    test("the mobile menu is hidden initially", () => {
      const mobileNav = screen.getByRole("mobile-menu-behavior", { hidden: true });
      expect(mobileNav).toHaveClass("translate-x-full");
    })
  })

})

test("clicking hamburger opens mobile menu", () => {
  render(<Header />);
  const hamburger = screen.getByTestId("burger-button");
  const mobileNav = screen.getByTestId("mobile-menu");
  fireEvent.click(hamburger);
  expect(mobileNav).toHaveClass("translate-x-0");
})
