# Relembrando🧠:

  Assim como no front-end, as operações assíncronas são essenciais para as rotinas do back-end. Essas operações permitem que tarefas independentes sejam executadas em segundo plano, sem que o fluxo de execução aguarde pela finalização dessas tarefas. Essa prática contribui, principalmente, para tarefas que demandam maior tempo de execução.

  ## Existem duas formas principais para implementarmos código assíncrono em JavaScript, usando Callbacks e Promises.

  > As Callbacks
    fornecem uma interface com a qual você pode dizer: “e quando terminar de fazer isso, faça aquilo”.

  **O uso aninhado dessas funções pode dificultar a legibilidade do seu código. Conheça um pouco mais sobre esse problema lendo o material sobre Callback Hell.**

  http://callbackhell.com/

 ## Em JavaScript
 
   as Promises funcionam do mesmo jeito: uma promessa/função é criada e, dentro dela, existe um código/ação a ser executado.
   
   Se o código é executado sem nenhum problema, a **Promise é resolvida** por meio da função **resolve**;
   
   se algo de errado acontecer durante a execução, a **Promise é rejeitada** por meio da função **reject**.