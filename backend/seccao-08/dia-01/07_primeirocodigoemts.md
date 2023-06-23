# Configuração inicial (setup)
> Crie um diretório chamado aprendendo-ts. Nele, você vai inicializar seu projeto TypeScript.

mkdir aprendendo-ts && cd aprendendo-ts


> A seguir, você vai inicializar seu projeto Node e instalar o TypeScript, o ts-node e o módulo npm com a configuração base do tsconfig para o Node 16 (ou superior).


npm init -y

npm install -D ts-node typescript@4.4 @tsconfig/node16@1.0

# tsconfig.json

tsc --init

Garanta que seu arquivo tsconfig.json tenha as seguintes configurações:

{
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {
    "target": "es2016",                                 
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "preserveConstEnums": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}

Instale o pacote npm com as definições de tipos para o Node.js.

npm install -D @types/node@16.11

# Projeto GitHub Rockstars
Você recebeu a missão de fazer uma pequena aplicação para ajudar no recrutamento de pessoas desenvolvedoras! Com base em uma lista estática de perfis do GitHub, deverão ser extraídas algumas informações:

 > Listar todas as pessoas.
 > Filtrar pessoas com base em determinada quantidade de repositórios.
 > Descobrir se uma pessoa é a mais ativa da lista.
Para começar, crie sua estrutura de diretórios:


mkdir src && cd src
mkdir types && touch types/User.ts
touch data.ts myFunctions.ts index.ts 

> O diretório types concentrará todos os type aliases utilizados no projeto. A princípio, você terá apenas um para User. Os arquivos data.ts, myFunctions.ts e index.ts conterão, respectivamente, a lista estática de perfis, as funções que a aplicação deve fazer e as chamadas dessas funções.


.
└── aprendendo-ts/
    ├── src/
    │   └── index.ts
    │   └── data.ts
    │   └── myFunctions.ts
    │   └── types/
    │       └── User.ts
    └── package-lock.json
    └── package.json
    └── tsconfig.json
    └── node_modules



# Implementação










