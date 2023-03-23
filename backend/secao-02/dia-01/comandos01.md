# querys.

  selecionar todos os elementos da tabela especifica.
  >> select * FROM sakila.actor;

# Constraints (restrições), chaves primárias e chaves estrangeiras.

  <NOT NULL> - 
    Garante que aquele campo não pode conter valores nulos, ou seja, se não houver um valor padrão (DEFAULT) definido, será sempre necessário passar um valor para esse campo durante a inserção ou alteração de dados.

  <UNIQUE> - 
    Garante que o valor inserido na coluna da tabela é único, isto é, não pode haver outro valor igual para esta coluna registrado nesta tabela.

  <PRIMARY KEY> - 
    Garante que o valor seja a chave primária da tabela, ou seja, que a coluna que possui essa constraint aplicada seja o identificador único da tabela. Ela também é, por definição, não nula (mesmo efeito da constraint 
    NOT NULL) e única (mesmo efeito da constraint UNIQUE).

  <FOREIGN KEY> - 
    Garante que o valor seja uma chave estrangeira da tabela, ou seja, faça referência à chave primária (valor em uma coluna com a constraint PRIMARY KEY) de outra tabela, permitindo um relacionamento entre tabelas.
  
  <DEFAULT> - 
    Garante que, caso nenhum valor seja inserido na coluna (ou caso a pessoa usuária insira um valor nulo), a constraint colocará o valor padrão passado para ela.



# O que é uma entidade?

  **<Entidade>: Pessoa. <Propriedades>: Altura, peso, idade**

  A entidade é nossa tabela dentro de um banco de dados e as propriedades fazem parte dessa tabela.

  Em alguns desses casos, as entidades são individuais e não se relacionam entre si, porém, às vezes, elas são ligadas umas às outras através de relacionamentos. Vamos ver mais sobre isso a seguir.

