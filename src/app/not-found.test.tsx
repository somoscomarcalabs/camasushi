import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import NotFound from '@/app/not-found';

test('it can render without errors', () => {
  render(<NotFound />);
  expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
})

test.todo('it has a 404 image')
test.todo('it has a title with "Página no encontrada" message')
test.todo('it has a link to go back to the homepage')
