# Encapsulamento.

A ideia é **garantir que os processos internos da classe possam ocorrer sem que a pessoa que a utiliza altere atributos de forma indevida**, o que poderia ocasionar em problemas no funcionamento.

Para isso existem os **modificadores de visibilidade do atributo,** sendo os principais o *public*, o *private*, o *protected* e o *readonly*. O protected vai ser apresentado juntamente com herança.

1. Os atributos criados sem modificadores de visibilidade são públicos por padrão

2. Já os atributos criados com o modificador private
só podem ser lidos e modificados dentro da classe. Isso significa que se você tentar utilizar a notação objeto.atributo do lado de fora das chaves que delimitam a criação da classe, você terá um erro do compilador.

# Para alterar atributos privados fora de uma classe, utilizamos os métodos.

Eles validam as leituras e alterações, de forma a não comprometer o funcionamento da classe.

**Por exemplo**, você pode ter uma classe Pessoa com o atributo dataDeNascimento privado, e possuir um método para mudar esta data de nascimento de forma a validar se é digitada uma data válida.

Para **ler os valores dos atributos**, podemos criar os métodos *getters*, e para modificar, os métodos *setters*.

É importante salientar que atributos privados não são obrigados a ter getters e setters.

Eles só precisam destes métodos caso seja necessário alterá-los diretamente, podendo garantir uma validação do dado que foi passado.

# uma boa prática é deixar todos os atributos como privados e criar os getters e setters de acordo com a necessidade de cada atributo.

Uma outra prática muito comum é o uso de um underline antes do nome de atributos privados.


