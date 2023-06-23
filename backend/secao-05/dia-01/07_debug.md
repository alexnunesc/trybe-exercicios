# Configurando seu ambiente para Debug

> Para configurar sua máquina para fazer o debug, clique na opção Run and Debug no menu à esquerda do seu VsCode ou utilize o atalho Ctrl + Shift + D se for usuário do Linux.

> Depois, clique na opção Run and Debug destacada em azul.

> Ao abrir a caixa de seleção, clique em Node.Js.

> Depois selecione o script utilizado para rodar a aplicação em desenvolvimento, por exemplo, em nossa aplicação TrybeCar, selecione a opção Run Script: debug.

> ⚠️ Caso o script de debug não funcione, você pode selecionar a opção Run Current File ao final da lista.


Isso fará com que o servidor inicie o nodemon em processo de depuração.

Breakpoints
Para que o debug fique mais nítido, podemos especificar a linha que desejamos analisar através de uma ferramenta chamada breakpoint. Em tradução livre, breakpoint pode significar "ponto de parada". Podemos marcar esses pontos de parada clicando com o mouse à esquerda do número da linha. Quando fazemos isso, um pequeno círculo vermelho aparecerá, indicando que aquela linha é um breakpoint.

Isso significa que, quando sua depuração chegar àquela linha, haverá uma pausa para que você possa analisar aquele escopo. Essa análise é feita no menu lateral, onde você poderá identificar informações como variáveis, nome do arquivo, funções chamadas etc.
