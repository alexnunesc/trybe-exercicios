# Tipos de teste.

# 1 - **Testes unitários:**
  consideram um escopo limitado a um pequeno fragmento do seu código com interação mínima entre recursos externos.


 > Aviso: Para exemplificar esse tipo de teste, vamos imaginar o teste unitário de um carro. 🚗

  O motor precisa ser testado para saber se ele tem potência e torque; já os pneus são testados para saber se têm boa aderência no asfalto. Além disso, testamos o assento do motorista para saber se é confortável e ergonômico e também o volante para saber se é fácil manusear e esterçar.


## 2 - **Testes de integração:**
  presumem a junção de múltiplos escopos (que tecnicamente devem possuir, cada um, seus próprios testes) com interações entre eles.

  > Voltando ao exemplo do carro,
   agora nos testes de integração, ao acelerar testamos se o motor permanece em uma velocidade constante e se, ao esterçar o volante, os pneus dianteiros são orientados corretamente para a direção desejada. Além disso, testamos se, ao se acomodar no assento da pessoa motorista, é fácil manusear o volante e o câmbio.



# 3 - **Testes de Ponta-a-ponta:**
  também chamados de Fim-a-fim (End-to-End; E2E), pressupõem um fluxo de interação completo com a aplicação, de uma ponta a outra.

  > Aqui, poderíamos pensar em uma API que utiliza nossa calculadora - assim como diversas outras funções mais complexas - na hora de realizar uma operação de venda de produtos.

  **De olho na dica 👀:** Esse teste é o mais completo, pois necessita que todos os demais testes tenham sido desenvolvidos.

  > Ainda no exemplo do carro,
  no teste Ponta-a-Ponta (PaP) podemos fazer um test-drive de impacto para avaliar todos os aspectos, realizando, por exemplo, uma corrida com vários carros em um circuito.







