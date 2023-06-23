# Métodos e atributos estáticos.

Um método estático nada mais é do que uma função que não precisa acessar nenhum atributo do objeto.

A diferença semântica de um método estático para uma função é que o método estático tem a ver com a classe. Isso significa que fica um pouco “sem sentido” você disponibilizar um método sozinho, pois, por mais que ele não precise manipular uma instância, ele está muito ligado à classe.

Além de métodos, podemos ter atributos estáticos, que são acessados manipulando a classe, não a instância.

Agora vamos ver outro exemplo com uma classe Employee que possui um atributo estático chamado employeeCount, responsável por armazenar a quantidade total de pessoas funcionárias, e um método estático chamado de addEmployee(), responsável por incrementar a contagem de pessoas funcionárias. Com esse exemplo é possível notar que a cada instanciação de Employee o atributo employeeCount é incrementado:



Observe que usamos o nome da classe para acessar o atributo employeeCount dentro do método addEmployee() da classe Employee. Poderíamos utilizar o this para acessá-lo, mas como boa prática, mantemos o nome da classe para acessar atributos e métodos estáticos em qualquer ponto do código. Isso acontece para deixar nítido, para outras pessoas desenvolvedoras, que aquele atributo ou método é estático.

Resumindo:

Os métodos e atributos estáticos pertencem a classe e não aos objetos da classe.
Se um atributo estático tiver seu valor alterado em algum objeto da classe, a alteração se aplicará a todos os objetos já instanciados e os que serão instanciados.
Entretanto, é importante salientar que na maioria das vezes é preferível criar uma função normal, no mesmo módulo que a classe está sendo criada, exportando-as de forma separada. Isso facilita a vida de quem vai usar.
