import { test, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('It renders without crashing', () => {
    expect(() => render(<Footer />)).not.toThrow();
  });

  test("It renders the address information", () => {
    const address = screen.getByText("Calle Estrada 206, esquina Córdoba");
    expect(address).toBeInTheDocument();
  });

  test("It renders the phone numbers", () => {
    const phoneNumbers = screen.getByText("3743 417060 / 3743 502117");
    expect(phoneNumbers).toBeInTheDocument();
  });

  test("It renders the copyright text", () => {
    const copyright = screen.getByText(/© 2025 CamaSushi\. Todos los derechos reservados\./);
    expect(copyright).toBeInTheDocument();
  });

  test("WhatsApp link opens in new tab", () => {
    const whatsappLink = screen.getByLabelText("WhatsApp");
    expect(whatsappLink).toHaveAttribute("target", "_blank");
  });

  test("WhatsApp link has security attributes", () => {
    const whatsappLink = screen.getByLabelText("WhatsApp");
    expect(whatsappLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("It renders the Instagram link with correct URL", () => {
    const instagramLink = screen.getByLabelText("Instagram");
    expect(instagramLink).toHaveAttribute("href", "https://instagram.com/camasushi");
  });

  test("Instagram link opens in new tab", () => {
    const instagramLink = screen.getByLabelText("Instagram");
    expect(instagramLink).toHaveAttribute("target", "_blank");
  });

  test("Instagram link has security attributes", () => {
    const instagramLink = screen.getByLabelText("Instagram");
    expect(instagramLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("It renders the light mode logo", () => {
    const logos = screen.getAllByAltText("CamaSushi Logo");
    const lightLogo = logos.find(logo =>
      logo.getAttribute("src")?.includes("pez-light.png")
    );
    expect(lightLogo).toBeInTheDocument();
  });

  test("It renders the dark mode logo", () => {
    const logos = screen.getAllByAltText("CamaSushi Logo");
    const darkLogo = logos.find(logo =>
      logo.getAttribute("src")?.includes("pez-dark.png")
    );
    expect(darkLogo).toBeInTheDocument();
  });

  test("Light mode logo has correct CSS classes", () => {
    const logos = screen.getAllByAltText("CamaSushi Logo");
    const lightLogo = logos.find(logo =>
      logo.getAttribute("src")?.includes("pez-light.png")
    );
    expect(lightLogo).toHaveClass("block", "dark:hidden");
  });

  test("Dark mode logo has correct CSS classes", () => {
    const logos = screen.getAllByAltText("CamaSushi Logo");
    const darkLogo = logos.find(logo =>
      logo.getAttribute("src")?.includes("pez-dark.png")
    );
    expect(darkLogo).toHaveClass("hidden", "dark:block");
  });

  test("Footer has responsive padding classes", () => {
    const footerContainer = screen.getByText("Calle Estrada 206, esquina Córdoba").closest('footer');
    const innerContainer = footerContainer?.querySelector('.mx-auto');
    expect(innerContainer).toHaveClass("px-4", "sm:px-6", "md:px-8");
  });
});
