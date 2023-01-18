// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  // Passo 1: Renderizamos a aplicação, depois salvamos o email da pessoa usuária em uma variável (o que é uma boa prática).
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  
  // Passo 2: Verificamos se a tag <h2> onde o email aparece na tela está apenas com o texto Valor:,
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  // Passo 3: Procuramos pelo o campo de email e o botão que enviará os dados.
  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');

  // Passo 4: Simulamos a digitação da pessoa usuária no campo de email, com o userEvent.type(inputEmail, EMAIL_USER), passando o campo do input como primeiro parâmetro e o valor esperado como segundo parâmetro ('email@email.com').
  userEvent.type(inputEmail, EMAIL_USER);

  // Passo 5: Simulamos um clique no botão com o userEvent.click(btnSend), passando o elemento do botão como parâmetro.
  userEvent.click(btnSend);

  // Passo 6: Verificamos se após o click, o campo de input do email retorna para vazio e se a tag <h2>, que anteriormente só exibia Valor:, agora recebe o email passado ao input, resultando em Valor: email@email.com.
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});
