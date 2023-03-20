# Arquivos Compose mais robustos.

  💾 **Criar volumes:** são pastas dentro de um serviço que é persistente, ou seja, mesmo após descer o serviço, esta pasta ainda mantém seus arquivos na próxima vez que os serviços subirem.


  📶 **Criar redes virtuais:** onde alguns serviços podem se comunicar apenas em uma rede virtual #1, enquanto outros serviços podem se comunicar apenas em uma rede virtual #2.


# Criando Volumes.

Adiconamos valumes.

  <nome-do-volume>:<caminho-no-container-para-montar>

  >> volumes:
    >> - dados-do-banco:/data/db

  Ex.

      database:
      image: betrybe/docker-compose-example-database:v1    # Especificamos a Imagem Docker diretamente.
      restart: always
      volumes:
        - dados-do-banco:/data/db
  volumes:
    dados-do-banco:

# Mapeando local.

  Estamos mapeando uma pasta do nosso computador local (./logs) para uma pasta dentro do serviço de front-end (/var/log/frontend). Desta maneira, não precisamos criar volumes virtuais, pois estamos usando uma pasta do nosso próprio computador.

    volumes:
    - ./logs:/var/log/frontend    # caminho no computador : caminho no container
  
  **Link**
    https://content-assets.betrybe.com/prod/Integra%C3%A7%C3%A3o%20entre%20volumes%20e%20servi%C3%A7os%20no%20Compose.png

# Criando redes virtuais.

  O serviço front-end só precisa se comunicar diretamente com o back-end;

  O serviço back-end precisa se comunicar tanto com o front-end quanto com o database;

  O serviço database só precisa se comunicar diretamente com o back-end.

  **No arquivo <docker-compose.yaml>**


  #### No final do arquivo existe uma nova chave de primeiro nível networks:

  Em cada linha declaramos o nome de uma nova rede virtual;
  As redes virtuais permitem criar isolamento entre os serviços;
  Ao utilizar esta chave, o Compose não vai mais criar a rede virtual padrão, como estava fazendo antes!
  Dentro de cada serviço, também temos a nova chave networks:

  >> Para o front-end, declaramos que ele está presente na <rede-virtual-1>;

  >> Para o back-end, declaramos que ele está presente na <rede-virtual-1 > e na <rede-virtual-2>;

  >> Para o database, declaramos que ele está presente na <rede-virtual-2>.

  ***Links***
    https://content-assets.betrybe.com/prod/Integra%C3%A7%C3%A3o%20entre%20redes%20virtuais%20e%20servi%C3%A7os%20no%20Compose.png


# O comando docker-compose up aceita a flag --scale service=<número-de-replicas>,
   onde podemos configurar a quantidade de réplicas para um serviço. Entretanto, esta opção normalmente é utilizada em ambientes de produção e não é necessária para nossos estudos agora.