let nome = 'Alex';
let sobrenome = 'Nunes';
let age = 24;
let array = [1, 2, 3]
 
let singer = {//criando objeto
name: 'Alex',
sobrenome: 'Nunes',
age: 24,
array: [1, 2, 3],
  novoObjeto: { //objeto dentro de objeto
    city: 'Goiania',
    estado: 'GO'
  }
};

console.log(`${singer.name} tem ${singer['age']} anos de idade`);
//buscando valores dentro do objeto

singer['fullName'] = `${singer.name} ${singer['sobrenome']}`; //criando uma nova propiedade

console.table(singer);//mostrndo em formarto de tabela

console.log (`O ${singer.fullName} morar no estado de ${singer.novoObjeto['estado']}`) //acessando objeto dentro de objeto.
