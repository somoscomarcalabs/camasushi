import { describe, test, expect, vi } from 'vitest';
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

  // test('it renders a 404 image from public folder', () => {
  //   render(<NotFound />);
  //   const img = screen.getAllByAltText('Error 404 - Página no encontrada') as HTMLImageElement[];
  //   console.log({ img })
  //   expect(img).toBeInTheDocument();
  //   expect(img.src).toContain('/images/ui/404-light-transparente.png');
  // });

  test('it renders dark and light images on initial DOM', () => {
    render(<NotFound />)

    const images = screen.getAllByAltText('Error 404 - Página no encontrada')
    expect(images).toHaveLength(2)
  })

  test('has a link/button that goes to the homepage', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /Volver a Inicio/i }) as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
