import { describe, test, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';

import NotFound, { IMAGE_404_ALT_TEXT } from '@/app/not-found';

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

describe('NotFound page', () => {

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('it renders main container', () => {
    render(<NotFound />);
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });

  test('it shows the "Página no encontrada" title', () => {
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
    setupMatchMediaMock('dark')
    render(<NotFound />)
    const images = screen.getAllByAltText(IMAGE_404_ALT_TEXT)
    const darkImageSrc = images.find(img => img.getAttribute('src')?.includes('404-dark-transparent.png'));
    expect(darkImageSrc?.getAttribute('src')).toContain('404-dark-transparent.png')
  })

  test('it renders 404 light image when browser uses light theme', () => {
    setupMatchMediaMock('light')
    render(<NotFound />)
    const images = screen.getAllByAltText(IMAGE_404_ALT_TEXT)
    const lightImageSrc = images.find(img => img.getAttribute('src')?.includes('404-light-transparent.png'));
    expect(lightImageSrc?.getAttribute('src')).toContain('404-light-transparent.png')
  })

  test('it has a link/button that goes to the homepage', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /Volver a Inicio/i }) as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
