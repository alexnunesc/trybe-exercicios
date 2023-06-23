# Mapeamentos

Os dois principais padrões.
> Data Mapper.
> Active Record.


Foram criados por Martin Fowler em seu livro Padrões de Arquitetura de Aplicações


# Data Mapper
 Nesse caso a tabela do deve conhecer o objeto, mas  a classe que representa cada registro da tabela, não deve saber sobre o db.

 a classe Pessoa está desacoplada do banco de dados. As informações e os comportamentos relacionados a Pessoa no contexto específico do nosso negócio ficam nesses objetos. Já a responsabilidade por criar as transações das informações com o banco de dados fica em outro lugar, na classe Mapeador Pessoa.

  Isso significa que enquanto o Mapeador Pessoa está fortemente acoplado ao banco de dados e deve ser refatorado ou refeito sempre que houver mudança na estrutura do banco de dados, a entidade Pessoa está completamente independente. Ela não se interessa como o banco de dados está. Essa complexidade é absorvida pelo mapeador.

# Active Record

  Diferente do padrão Data Mapper, no Active Record a classe que representa os registros conhece os recursos necessários para realizar as transações no banco de dados.












