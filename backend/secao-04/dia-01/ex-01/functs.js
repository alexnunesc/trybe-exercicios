
const imc = (peso, altura) => {
  const res = peso / (altura**2);

  switch (true) {
    case res < 18.5:
      return `Abaixo do peso (magreza): ${res.toFixed(2)}`;

    case res > 18.5 && res <= 24.9:
      return `Peso normal: ${res.toFixed(2)}`;

    case res >= 25 && res <= 29.9:
      return `Acima do peso (sobrepeso): ${res.toFixed(2)}`;

    default:
      break;
  };

};

module.exports = {
  imc
};
