import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import About from './About';

test("Renders the section container", () => {
  expect(() => render(<About />)).not.toThrow();
});
