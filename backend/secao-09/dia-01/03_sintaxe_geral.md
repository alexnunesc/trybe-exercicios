# Sintaxe geral.

Agora, vamos ver como fica a sintaxe de criação de classes, objetos, atributos e métodos em TypeScript.


1. Para criar uma classe:
usamos a palavra reservada **class** em seguida o nome da mesma e par de {}.


2. Dentro das chaves podemos criar atributos:
digitando o nome do atributo e seu tipo.


3. Entre as chaves da classe podemos criar métodos:
*digitando seu nome*, os parênteses com os parâmetros e as chaves com o corpo, assim como uma função normal, só que *sem precisar do function*.


# Com a classe Person, podemos criar dois (ou mais) objetos (duas pessoas) diferentes, p1 e p2.

4. O método *construtor* (constructor) é chamado assim que *utilizamos a sintaxe de criação de um objeto* com a *palavra reservada **new***.

O construtor recebe *os parâmetros* **n, h e w**, que estão abreviados apenas para deixar explícito que o nome dos parâmetros não é diretamente relacionado ao nome dos atributos que eles populam.

Normalmente, eles teriam o mesmo nome (ou seja, n seria name, etc).

5. Um ponto muito importante é o uso da palavra reservada this.

O *this serve justamente para representar o objeto em si*. Quando, no construtor, escrevemos **this.name = n**, **estamos dizendo que o atributo name do objeto que chamou o método irá possuir o valor n**.

> Quando p1 é criada, this se refere a p1, logo, n e name passam a ser “Maria”.

> E quando p2 é criada, this se refere a p2, logo, n e name passam a ser “João”.

# Do lado de fora usamos a sintaxe objeto.

atributo, mas como do lado de dentro não temos como saber qual é o objeto, precisamos utilizar a sintaxe this.atributo.




