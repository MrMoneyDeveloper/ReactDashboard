import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Patients sidebar heading', () => {
  render(<App />);
  const headings = screen.getAllByText(/Patients/i);
  expect(headings.length).toBeGreaterThan(0);
});
