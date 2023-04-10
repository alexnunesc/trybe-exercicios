// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};

/*
Note como utilizamos as palavras-chave module.exports.
Como vimos anteriormente, um módulo possui um escopo isolado, ou seja, suas funções, variáveis, classes e demais definições existem somente dentro do módulo.
*/