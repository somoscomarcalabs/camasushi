import { test, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';


test('It renders without crashing', () => {
  expect(() => render(<Footer />)).not.toThrow();
})
