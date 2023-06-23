# Tipos primitivos.

  1. string: 
    > uma sequência de quaisquer caracteres que pertençam ao padrão UTF-16 Unicode.

  2. number: 
    > recebe valores numéricos, sejam eles inteiros ou frações.

  3. boolean: 
    > recebe verdadeiro (true) ou falso (false).

  4. null: 
    > representa a ausência intencional de um valor. É como dizer “aqui não há valor e isso é proposital”.

  5. undefined: 
    > representa a ausência de um valor cujo tipo não foi explicitado no código.

  6. any: 
    > pode ser qualquer coisa.

Devemos habilitar o noImplicitAny no arquivo tsconfig.ts

# unknown

   Usamos esse tipo para comsumir APIs externas que não sabemos os tipos exatos que nos retoram