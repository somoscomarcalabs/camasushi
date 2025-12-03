import { test, expect, describe, beforeEach } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react'
import Header from './Header';

describe("Header Component", () => {

  beforeEach(() => {
    render(<Header />);
  })

  test('It renders without crashing', () => {
    expect(() => render(<Header />)).not.toThrow();
  })

  test("It renders the logo", () => {
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  })

  test("It renders the desktop navigation element", () => {
    expect(screen.getByTestId('desktop-navigation')).toBeInTheDocument();
  })

  describe("Mobile menu behavior", () => {
    test("Is hidden initially", () => {
      const mobileNavBehavior = screen.getByRole("mobile-menu-behavior", { hidden: true });
      expect(mobileNavBehavior).toHaveClass("translate-x-full");
    })

    test("Clicking hamburger opens mobile menu", () => {
      const toggle = screen.getByTestId("burger-button");
      const mobileNav = screen.getByTestId("mobile-menu");
      fireEvent.click(toggle);
      expect(mobileNav).toHaveClass("translate-x-0");
    })

    test("Clicking hamburger again closes mobile menu", () => {
      const toggle = screen.getByTestId("burger-button");
      const mobileNav = screen.getByTestId("mobile-menu");
      fireEvent.click(toggle);
      fireEvent.click(toggle);
      expect(mobileNav).toHaveClass("translate-x-full");
    })

    test("Clicking a mobile link closes the menu", () => {
      const toggle = screen.getByTestId("burger-button");
      const mobileMenu = screen.getByTestId("mobile-menu");

      fireEvent.click(toggle);
      const mobileLinks = within(mobileMenu).getAllByRole("link");
      fireEvent.click(mobileLinks[0]);
      expect(mobileMenu).toHaveClass("translate-x-full");
    })
  })
})
