# Type Aliases: facilitando a referência a tipos complexos
Type Aliases são uma forma de criar um tipo personalizado em Typescript. Com eles, você pode dar um nome novo para um tipo existente, facilitando a sua vida na hora de lidar com tipos complexos. Pensa naquele tipo que é um verdadeiro bicho de sete cabeças e que você precisa usar o tempo todo… Com o Type Alias, você pode dar um nome mais amigável e usar ele sem dor de cabeça.


# Type Alias. Por exemplo:

type Personagem = {
  nome: string;
  nivel: number;
  classe: string;
};


> Com esse Type Alias, você pode tipar variáveis ou parâmetros de função do tipo Personagem de forma mais simples, sem precisar digitar toda a definição do tipo sempre que for usá-lo.

# Por exemplo:

function mostrarPersonagem(personagem: Personagem) {
  console.log(`Nome: ${personagem.nome}, Nível: ${personagem.nivel}, Classe: ${personagem.classe}`);
}

const meuPersonagem: Personagem = {
  nome: 'Aragorn',
  nivel: 10,
  classe: 'Guerreiro'
};

mostrarPersonagem(meuPersonagem); // "Nome: Aragorn, Nível: 10, Classe: Guerreiro"


# Mas e se quisermos adicionar um método para o nosso personagem, como atacar? Não dá para adicionar esse tipo de definição em um Type Alias.

Aí é que entra a interface! Através dela, podemos definir não só propriedades, mas também métodos que o personagem deve possuir.

interface Personagem {
  nome: string;
  nivel: number;
  classe: string;
  atacar(): void;
  defender(): void;
}


# Implementando.

class Guerreiro implements Personagem {
  nome = 'Kratos';
  nivel = 99;
  classe = 'Guerreiro da Justiça';
  
  atacar() {
    console.log('Kratos usou a Lâmina do Caos! Inimigo derrotado!');
  }
  
  defender() {
    console.log('Kratos levantou o escudo e bloqueou o ataque!');
  }
}

const meuGuerreiro: Personagem = new Guerreiro();

meuGuerreiro.atacar(); // "Kratos usou a Lâmina do Caos! Inimigo derrotado!"

meuGuerreiro.defender(); // "Kratos levantou o escudo e bloqueou o ataque!"

