import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import NotFound from '@/app/not-found';

describe('NotFound page', () => {
  test('renders main container', () => {
    render(<NotFound />);
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });

  test('shows the Spanish title', () => {
    render(<NotFound />);
    expect(screen.getByRole('heading', { name: /Página no encontrada/i })).toBeInTheDocument();
  });

  test('renders a 404 image from public folder', () => {
    render(<NotFound />);
    const img = screen.getByAltText('404 illustration') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('/images/ui/404-light-transparente.png');
  });

  test('has a link/button that goes to the homepage', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /Volver a Inicio/i }) as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
