import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';
import userEvent from '@testing-library/user-event';

// afterEach(() => cleanup())

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se o componente possui texto green ao ser digitado um e-mail Inválido.', () => {
  const EMAIL_USER = 'email@email.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'green-text');
})

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se o componente possui texto red ao ser digitado um e-mail Inválido.', () => {
  const EMAIL_USER = 'emailemail.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'red-text');
});

test('Testando se não aparecer a msg na tela antes de clicar no enviar.', () => {

  const EMAIL_USER = '';

  render(<ValidEmail email={ EMAIL_USER } />);

  const textEmail = screen.queryByTestId('id-is-email-valid');

  expect(textEmail).not.toBeInTheDocument();

});


