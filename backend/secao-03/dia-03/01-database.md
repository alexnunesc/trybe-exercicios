# Database Design - Como modelar um banco de dados.

> Identificar as entidades, atributos e relacionamentos com base na descrição do problema:

  1.1 Por exemplo, a entidade álbum possui os atributos título e preço e se relaciona com a entidade artista

  ## 1. Entidades.

  São uma representação de algo do mundo real dentro do banco de dados e que normalmente englobam toda uma ideia. São armazenadas em formato de tabelas em um banco de dados.

  >  Entidade 1: Álbum;
  >  Entidade 2: Artista;
  >  Entidade 3: Estilo Musical;
  >  Entidade 4: Canção.


  ## 2. Atributos.

  Um atributo é tudo aquilo que pode ser usado para descrever algo. Por exemplo, uma entidade pessoa pode ter nome, altura, peso e idade como atributos.


  > Álbum: album_id, titulo, preco, estilo_id e artista_id;
  > Artista: artista_id e nome;
  > Estilo Musical: estilo_id e nome;
  > Canção: cancao_id, nome e album_id

  Algo a ser notado aqui é que algumas informações precisam ser deduzidas, como, por exemplo, a coluna que armazena o identificador único dos registros (aqui chamado de id), que todas tabelas precisam ter.

  ## 3. Relacionamentos:

  Os relacionamentos servem para representar como uma entidade deve estar ligada com outra(s) no banco de dados. Há três tipos de relacionamentos possíveis em um banco de dados, são eles:

  > Relacionamento Um para Um (1..1);
  > Relacionamento Um para Muitos ou Muitos para Um (1..N);
  > Relacionamento Muitos para Muitos (N..N).



