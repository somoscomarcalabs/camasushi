import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import NotFound, { IMAGE_404_ALT_TEXT } from '@/app/not-found';

describe('NotFound page', () => {
  test('it renders main container', () => {
    render(<NotFound />);
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });

  test('it shows the Spanish title', () => {
    render(<NotFound />);
    expect(
      screen.getByRole('heading', { name: /Página no encontrada/i })
    ).toBeInTheDocument();
  });

  test('it renders dark and light images on initial DOM', () => {
    render(<NotFound />)
    const images = screen.getAllByAltText(IMAGE_404_ALT_TEXT)
    expect(images).toHaveLength(2)
  })

  test('it renders 404 dark image when browser uses dark theme', () => {
    const setupMatchMediaMock = (theme: 'light' | 'dark') => {
      vi.restoreAllMocks();

      // Mockea la función window.matchMedia
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(query => ({
          matches: query === '(prefers-color-scheme: dark)' ? theme === 'dark' : false,
          media: query,
          onchange: null,
          addListener: vi.fn(), // deprecated
          removeListener: vi.fn(), // deprecated
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });
    };

    setupMatchMediaMock('dark')
    render(<NotFound />)

    const images = screen.getAllByAltText(IMAGE_404_ALT_TEXT)
    const darkImageSrc = images.find(img => img.getAttribute('src')?.includes('404-dark-transparente.png'));
    expect(darkImageSrc?.getAttribute('src')).toContain('404-dark-transparente.png')
  })

  test('it has a link/button that goes to the homepage', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /Volver a Inicio/i }) as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
