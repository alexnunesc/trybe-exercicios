# Definição de Interface.

**Interface** é um molde de uma Classe, em outras palavras, uma declaração de atributos e/ou métodos que uma Classe deve possuir.

Ela serve para nomear e parametrizar atributos e métodos de uma Classe, porém não define seus valores ou implementações.

Interfaces são uma forma eficiente de definir um “contrato de código”, ou seja, aquilo que você espera que seja implementado dentro do seu código.


Uma **Interface** não inicializa nem implementa as propriedades declaradas dentro dela, porque o único trabalho de uma Interface é descrever o objeto.

Ela define o que o contrato de código exige, enquanto quem implementa a Interface deve atender ao contrato fornecendo os detalhes de implementação necessários.

A interface por si só não pode ser instanciada, ou seja, **não podemos usar ela junto com o new para criar um objeto novo**.

Ela é apenas o contrato que será implementado por uma classe.


Na interface **não implementamos nenhum código**, apenas definimos o contrato (atributos e assinatura dos métodos).

A classe que implementar essa interface, **deve, obrigatoriamente, implementar todos os métodos e ter todos os atributos que a interface declara**.
