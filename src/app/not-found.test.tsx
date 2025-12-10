import { describe, test, expect } from 'vitest';
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

  test('it has a link/button that goes to the homepage', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /Volver a Inicio/i }) as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
