import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('render high school education', () => {
  render(<App />);
  const linkElement = screen.getByText(/smkn 3 depok/i);
  expect(linkElement).toBeInTheDocument();
});
