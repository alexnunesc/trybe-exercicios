const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const dados = `Olá ${order.name = 'Ana Silveira'}
  Telefone: ${order.phoneNumber} Numero${order.address.apartment}`
  console.log(dados);
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizza = Object.keys(order.order.pizza);
  const dados1 = `Olá ${order.name = 'Ju'} o total do valor ${pizza[0]} e ${pizza[1]}`

  console.log(dados1);

};

orderModifier(order);