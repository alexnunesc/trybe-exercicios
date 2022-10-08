const buttonEnviar = document.querySelector('#buttonEnviar');

const termos = document.getElementsByName('termosc');

const nome = document.querySelector('#nome');

/* function nomes() {
  if (nome.value.length >= 10) {
    alert('Parabéns!')
  } else {
    alert('adiconae um nome')
  }
}
buttonEnviar.addEventListener('click', nomes())

 */
buttonEnviar.addEventListener('click', (event) => {
 
  if (!termos[1].checked || nome.value.length < 10) {
    alert('Aceite os termos');
    alert('Adiciona um nome')
    event.preventDefault();
  } else if (termos[1].checked && nome.value.length > 10) {
    alert('Parabéns!')
  }
})

/* buttonEnviar.addEventListener('click', (event) => {
  if (nome.value.length >= 10) {
    alert('Parabéns!')
  } else if (!termos[1].checked) {
    alert('Aceite os termos');
    event.preventDefault();
  } else {
    alert('adiconae um nome')
  }
})
 */