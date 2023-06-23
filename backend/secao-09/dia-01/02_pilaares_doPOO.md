# Pilares da POO.

A Programação Orientada a Objetos possui quatro pilares fundamentais:

1. Abstração.

O *pilar abstração* indica que você não necessariamente precisa saber os detalhes de como algo funciona.

Pense **por exemplo** em uma câmera (como a do seu celular). Você provavelmente não sabe todos os detalhes de como ela funciona, você apenas precisa apontar, conferir no visor e apertar o botão.

Uma atualização pode mudar detalhes do funcionamento da câmera, mas sua operação vai continuar essencialmente a mesma.

2. Encapsulamento.

O *pilar encapsulamento* faz com que alguns atributos só possam ser acessados e/ou modificados dentro da classe.

Pense, *por exemplo*, no seu peso.

Você não pode, diretamente, mudar sua massa. Não é possível pensar “vou ter x quilos” e instantaneamente passar a ter essa massa.

Entretanto, algumas interfaces para alterar essa massa são expostas.

Você pode comer para aumentar a massa, e dentro de você, sem que possa ditar como seu corpo irá se comportar, ele vai absorver as calorias do alimento.

Ou seja, não é possível mudar diretamente a sua massa, pois **ela é um atributo privado da classe Pessoa**, mas **existem métodos na classe Pessoa que permitem que a massa seja alterada de forma interna, como o método *comer*.**

3. Herança.

O *pilar herança* permite que classes filhas, que **herdam métodos e atributos** de outra classe (super classe), sejam criadas.

Pense em uma **classe Pessoa**, com os atributos nome e altura e com o método sonhar.

A **partir dessa classe Pessoa, eu posso criar uma outra classe**, chamada PessoaCantora , que herda de Pessoa. Ou seja, j**á virá automaticamente com os atributos nome e altura e com o método sonhar,** mas **poderá ter outro método exclusivo dela,** como cantar.

4. Polimorfismo.

O *pilar polimorfismo* permite que **coisas diferentes aconteçam** ao chamarmos objetos de classes filhas distintas de uma mesma super classe.

Por exemplo, pense que existe a classe Pessoa, que possui um método dormir, só que esse método não é implementado (não possui nenhum código).

Então são criadas duas outras classes: *PessoaQueDormeDeBrucos* e *PessoaQueDormeDeLado*, e ambas implementam o método dormir conforme seus nomes.

Se em algum lugar do código eu espero um objeto da classe Pessoa, eu posso perfeitamente passar um objeto de uma classe filha (já que ele herda tudo que tem na classe Pessoa),

ou seja, eu posso passar tanto um **objeto da classe PessoaQueDormeDeBrucos** quanto **da classe PessoaQueDormeDeLado**. Como o código esperava um objeto da classe Pessoa, **qualquer um dos dois servem**, mas se o método dormir for chamado, **ele irá se comportar de forma diferente**.




