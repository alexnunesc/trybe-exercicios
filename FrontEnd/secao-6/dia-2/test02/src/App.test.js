// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '1',
    joke: 'piada',
    status: 200,
  };

  const mockJoke = {
    json: async () => joke
  }

  jest.spyOn(global, 'fetch').mockImplementation( async () => mockJoke );

  render(<App />);
  const renderedJoke = await screen.findByText('piada');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
  const btn = screen.queryByRole('button', { name: 'Gerar Piada' });
  userEvent.click(btn);
});