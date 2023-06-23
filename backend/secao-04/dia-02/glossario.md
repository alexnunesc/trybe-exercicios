# Glossário
Hoje estudamos sobre Servidores HTTP e como eles ligam o front-end com bancos de dados. Aprendemos a usar o Node.js com Express para criar rotas, ou endpoints, que tratam requisições de acordo com o Protocolo HTTP. Você aprendeu que a forma como fizemos nossa API respeita um padrão muito conhecido, chamado REST, e fez a sua primeira API C.R.U.D..

Foram nove habilidades muito bem estudadas, mas que tal dar uma passadinha rápida em alguns dos conceitos para garantir que está tudo dominado? 😉

C.R.U.D. (ou CRUD)
Esse é um acrônimo para um conjunto de operações muitíssimo comuns no mundo do desenvolvimento, elas são:

Create: Criar;
Read: Ler;
Update: Alterar;
Delete: Deletar;
Dependências e dependências de dependências
O Package.json é o arquivo onde estão listadas todas as dependências de um projeto. Lá estão sinalizados quais são os pacotes essenciais para o funcionamento da nossa aplicação, tanto em produção (na chave dependencies), quanto em desenvolvimento (na chave dev-dependencies).

Já o package-lock.json é um arquivo bem maior, pois lista também as dependências de nossas dependências, garantindo que tudo que nossa aplicação precisa para rodar está descrito ali. O Node se encarrega de que sempre que instalamos um pacote, os pacotes dos quais ele depende serão instalados junto.

Enquanto isso, a node_modules é onde todas as nossas dependências e dependências de nossas dependências efetivamente estão instaladas.

Framework Express
A palavra framework, quer dizer estrutura ou molde e é basicamente isso que ela é para uma aplicação. O framework é como um template, que te sugere uma forma específica de construir sua aplicação e te dá ferramentas pra fazer isso mais rápido.

O Express é um framework que nos ajuda a organizar e construir APIs robustas e flexíveis, nos dando ferramentas que fazem as coisas acontecerem com poucas linhas de código, abstraindo a lógica e códigos por trás de funcionalidades muito comuns nas aplicações.

Métodos de envio
Temos 3 métodos de envio:

Envio por parâmetros de consulta ou query params: Muito utilizado e amplamente visto em sites na internet.

Um exemplo de uso é o próprio site de pesquisa do Google, o qual envia o que foi pesquisado pela URL do seu navegador, por exemplo: https://www.google.com.br/search?q=Trybe;

Envio por parâmetros de rota ou route params: Também muito utilizado, mas este geralmente é visto em sites de produtos.

Um exemplo de uso são os e-commerces, quando clicamos em algum produto para ver a página específica dele, por exemplo: https://www.kabum.com.br/produto/128561;

Envio por body: Usado para envio de dados sensíveis/sigilosos, utilizado principalmente em formulários e juntamente com outros artefatos, dá maior segurança para sua aplicação.

Um exemplo de uso é o próprio login do course da Trybe.

Portas
Cada programa tem uma porta atribuída a ele, que é representada por um número. A função dessa porta é identificar para onde serão direcionadas as requisições feitas para aquele programa. Dizemos que um programa está “ouvindo”, do inglês “listen”, uma porta quando ele está alocado pelo sistema operacional pra ela.

Protocolo
Protocolo é uma convenção que padroniza algo. O protocolo HTTP, que tanto usamos, é uma convenção que padroniza a conexão, comunicação e transferência de dados, entre dois sistemas.

Rotas
Também são chamadas de caminhos, paths e endpoints de uma API. São a parte de uma URL que usamos para acessar uma API e fazer uma requisição a ela. Por meio dela requisitamos acesso, criação, leitura ou remoção de informações em nossas APIs. Em suma, quando você digita uma URL no navegador, por “trás dos panos” ele está fazendo uma requisição àquela rota.

Servidores web
São nada mais que programas de computador que entregam algum tipo de informação ou página solicitados via internet. Sempre que você abre seu navegador de internet e faz uma pesquisa no Google, é um servidor web da Google que te “responde”, trazendo o resultado da sua busca a partir das páginas e informações salvas no banco de dados da empresa.