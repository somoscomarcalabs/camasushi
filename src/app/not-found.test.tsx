import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import NotFound from '@/app/not-found';

test('it can render without errors', () => {
  render(<NotFound />);
  expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
})
