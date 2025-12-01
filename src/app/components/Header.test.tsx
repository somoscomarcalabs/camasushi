import { test, expect } from 'vitest';
import { render } from '@testing-library/react'
import Header from './Header';


test('The Header component renders correctly', () => {
  expect(() => render(<Header />)).not.toThrow();
})
