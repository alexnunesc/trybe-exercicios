# Projeto Super Heroeis.
link heroesbyalex.surge.sh
## Ambientede de Trabalho.

1. -Iniciar criar repositorio do projeto. 
2. -Criar Arquivos estrutura de diretorios e arquivos. (index.html, src > main.js, style.css).
3. -Iniciar json (npm init -y).
4. -Iniciar vite (npm install vite).
5. -Configurar Pakjson.
6. -Fazer build.


## Estrutura (HTML).

1. -página principal (main) onde vai todos os dados.

2. -uma caixa para titulo. (hedear >> h1).

3. -uma caixa para as imagens e nome do personagem. (div).

4. -um botão com texo sotear (button).


## Logíca.

1. - Fuçao para pegar o dado imagen e nome da api (fetch(`url ${id}`)).

2. - Ao clicar no botão, gera evento, com número aleatorio, que faz buscar na api do passo 1. ((Math.random, Math.round)

3. - Caso não haja erros adicionar imagem e nome na tela.

4. - caso haja error emetir um alerta para o usúario. (catch(error)).