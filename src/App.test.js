import { render, screen } from '@testing-library/react';
import App from './App';

test('renders different players', () => {
  render(<App />);
  const player1 = screen.getByText(/Player 1/i);
  const player2 = screen.getByText(/Player 2/i);
  const player3 = screen.getByText(/Player 3/i);
  expect(player1).toBeInTheDocument();
  expect(player2).toBeInTheDocument();
  expect(player3).toBeInTheDocument();
});
