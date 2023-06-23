# O primeiro passo é pensar na estrutura da nossa função. Para isso, podemos fazer as seguintes perguntas:


Quantos e quais parâmetros ela vai esperar?

Qual é o tipo de resposta que ela vai retornar?

Nesse caso, nossa função deverá receber um parâmetro “média” e responder com “reprovação” ou “aprovação”.

## Tendo o código da função implementado, precisamos garantir que seu comportamento é o esperado e que ele não mudará sem aviso - Para isto, devemos testar seus casos de uso e verificar se ela exibe, para cada caso, o comportamento esperado. Algumas das coisas que precisamos garantir são:

> Se passado um valor menor que 7, por exemplo 4, a resposta deve ser “reprovação”;

> Se passado um valor maior que 7, por exemplo 9, a resposta ser “aprovação”;

> Não podemos esquecer do “OU”, sendo assim, se passado 7, a resposta deve ser “aprovação”


# 👉 Se pensarmos nessa forma manual de testar aplicações, precisamos de três cenários de testes distintos:

1️⃣ quando a média for menor que sete;

2️⃣ quando a média for maior que sete;

3️⃣ quando a média for igual a sete.




