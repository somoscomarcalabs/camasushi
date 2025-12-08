import { test, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';



describe('About', () => {

  beforeEach(() => {
    render(<Contact />)
  });

  test("Renders the section container", () => {
    expect(() => render(<Contact />)).not.toThrow();
  });

  test('Renders the "Encontranos Fácilmente" heading', () => {
    expect(screen.getByRole('heading', { level: 2, name: /encontranos fácilmente/i })).toBeInTheDocument();
  });

  test('Renders the "Abrir en Google Maps" button', () => {
    expect(screen.getByRole('link', { name: /abrir en google maps/i })).toBeInTheDocument();
  });

  test('"Abrir en Google Maps" button opens in new tab', () => {
    const mapsButton = screen.getByRole('link', { name: /abrir en google maps/i });
    expect(mapsButton).toHaveAttribute('target', '_blank');
  });

  test('"Abrir en Google Maps" button has secure rel attribute', () => {
    const mapsButton = screen.getByRole('link', { name: /abrir en google maps/i });
    expect(mapsButton).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Renders the interactive map iframe', () => {
    expect(screen.getByTitle(/Ubicación de CamaSushi en Google Maps/i)).toBeInTheDocument();
  });

  test('Map iframe has accessible label', () => {
    expect(screen.getByLabelText(/Mapa interactivo mostrando la ubicación de CamaSushi/i)).toBeInTheDocument();
  });
});
