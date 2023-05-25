import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders jsx', () => {
  render(<div>learn react</div>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
