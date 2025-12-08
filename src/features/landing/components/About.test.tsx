import { test, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {

  beforeEach(() => {
    render(<About />);
  });

  test("Renders the section container", () => {
    expect(() => render(<About />)).not.toThrow();
  });

  test('Renders the main "Nuestra Historia" heading', () => {
    expect(screen.getByRole('heading', { level: 2, name: /nuestra historia/i })).toBeInTheDocument();
  });

  test('Renders the "Descubrí la pasión detrás de cada roll" subtitle', () => {
    expect(screen.getByText(/Descubrí la pasión detrás de cada roll/i)).toBeInTheDocument();
  });

  test('Renders the "Hacer un pedido" button', () => {
    expect(screen.getByRole('link', { name: /hacer un pedido/i })).toBeInTheDocument();
  });

  test('Renders the "Horarios" section heading', () => {
    expect(screen.getByRole('heading', { name: /horarios/i })).toBeInTheDocument();
  });

  test('Displays the correct schedule days', () => {
    expect(screen.getByText(/Viernes - Sábado/i)).toBeInTheDocument();
  });

  test('Displays the correct schedule hours', () => {
    expect(screen.getByText(/A Partir de las 19:00 PM/i)).toBeInTheDocument();
  });

  test('Renders the "Ubicación" section heading', () => {
    expect(screen.getByRole('heading', { name: /ubicación/i })).toBeInTheDocument();
  });

  test('Displays the complete address', () => {
    expect(screen.getByText(/Calle Estrada 206, esquina Córdoba, Puerto Rico, Misiones/i)).toBeInTheDocument();
  });

  test('Renders the "Contacto" section heading', () => {
    expect(screen.getByRole('heading', { name: /contacto/i })).toBeInTheDocument();
  });

  test('Displays the first phone number', () => {
    expect(screen.getByText(/3743 417060/i)).toBeInTheDocument();
  });

  test('Displays the second phone number', () => {
    expect(screen.getByText(/3743 502117/i)).toBeInTheDocument();
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

  test('Displays the restaurant description about tradition', () => {
    expect(screen.getByText(/fusionamos la tradición japonesa con ingredientes frescos y locales de Misiones/i)).toBeInTheDocument();
  });

  test('Displays the restaurant location description', () => {
    expect(screen.getByText(/Ubicados en el corazón de Puerto Rico, nos especializamos en sushi artesanal/i)).toBeInTheDocument();
  });
});
