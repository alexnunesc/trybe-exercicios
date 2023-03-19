# Docker build para fazer o build.

  Limpando tudo.
  >> docker system prune -af

  limpando melhor
  >> docker container kill $(docker ps -q)


# Crinando arquivo Dockerfile.
  FROM alpine:3.14
  CMD ["echo", "Olá, Mundo!"]

# Construindo a imagem Docker.

  >> docker build <flags> -t <nome-da-imagem> <contexto>
  Ex.
  >> docker images
  >> docker build -t primeira-imagem .
  >> docker build -t site-hugo .

  Executar.
  >> docker run namePasta

# Criando servidor Web.

  <!-- IMAGEM USADA -->
  FROM httpd:2.4.54
  <!-- COPIA O AQUIVO PARA O LOCAL DESEJADO -->
  COPY index.html /usr/local/apache2/htdocs/
  <!-- PORTA -->
  EXPOSE 80
  <!-- COMANDOS A SEREM EXECUTADOS -->
  CMD ["httpd-foreground"]


# Executando um novo container com nossa imagem.

  >> docker run --rm -d -p 1234:80 --name meu-container meu-servidor-web
  >> docker run -d -p 3000:3000 httpd:2.4

# Novas palavras.

  o <AS> usado para dar o nome do estagio.
  Ex.
    >> FROM nginx:1.21.3-alpine AS primeiro-estagio

  A palavra reservada <WORKDIR> indica para o Docker qual é a pasta atual
    >> WORKDIR /site


### processo de build. Logo:
  A primeira linha com RUN instala o ferramenta Hugo na nossa imagem Docker;
  A segunda linha executa o comando hugo –minify –gc para gerar as páginas finais em HTML, baseados nos arquivos de templates (index.html) e conteúdos (_index.md);

  A terceira linha executa o comando mv para mover as páginas resultantes do Hugo para o caminho onde o nginx espera que tenha páginas HTML para serem servidas.

### ENTRYPOINT

  A palavra reservada <ENTRYPOINT> indica para o Docker qual comando deve ser executado ao iniciar o container.
   >> ENTRYPOINT ["nginx", "-g", "daemon off;"]