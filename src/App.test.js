import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Partner app with header', () => {
  render(<App />);
  const partnerHeader = screen.getByText(/Partner/i);
  expect(partnerHeader).toBeInTheDocument();
});

test('renders sign up link when not authenticated', () => {
  render(<App />);
  const signUpLink = screen.getByText(/Sign Up/i);
  expect(signUpLink).toBeInTheDocument();
});
