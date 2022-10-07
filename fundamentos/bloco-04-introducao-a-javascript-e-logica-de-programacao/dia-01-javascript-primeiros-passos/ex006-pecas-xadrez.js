
const peca = 'caValO';

switch (peca.toLocaleLowerCase()) {
  case 'peão':
    res = 'Anda para frente'
  break
  case 'cavalo':
    res = 'Anda em L'
  break
  case 'torre':
    res = 'Anda para os lados '
  break
  case 'dama':
    res = 'Anda para todos os lados'
  break
  case 'rei':
    res = 'Anda para todos lados'
  break
  case 'bispo':
    res = 'Anda para as diagonais'
  break
  default:
    res = 'error'
}
console.log(res)

