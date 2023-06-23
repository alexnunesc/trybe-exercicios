# Interfaces versus Classes.


nterfaces e (super)classes podem servir para especificar o comportamento de classes, mas de formas e em níveis distintos.

Quando utilizamos interfaces, queremos garantir que alguns atributos e métodos existam, sem se importar com o que fazem. É mais um “me arranja alguma entidade que tenha o método x, pois eu vou precisar chamar x, e se ele não existir vai dar erro”.



Na imagem abaixo, perceba a diferença entre interfaces e classes, quando a classe Student implementa a interface IPerson, ela deve implementar e possuir todos os métodos e atributos dessa interface.

Quando as classes Teacher e Player herdam da classe Person, elas já herdam todos os métodos e atributos públicos ou protegidos implementados na classe Person.

