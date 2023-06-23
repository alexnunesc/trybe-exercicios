# tsconfig

No arquivo tsconfing.json de configuração em projetos TypeScript para definir como seu código será compilador.

Para gerar o arquivo executar.

tsc --init ou npx tsc --init
caso queira utilizar o tsc como um executável npx.


E xemplo de arquivo.


{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */
    [...]
    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include
    [...]

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "./",                                     /* Specify the root folder within your source files. */
    [...]

    /* JavaScript Support */
    [...]

    /* Emit */
    "outDir": "./",                                      /* Specify an output folder for all emitted files. */
    [...]

    /* Interop Constraints */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules.
    [...]

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    [...]
  }
}


# Explicação de cada coisa.

1. module:
  > especifica o “sistema de módulo” a ser utilizado no código JavaScript. Leia a documentação se quiser se aprofundar, mas aqui será requerido ‘CommonJS’ quase sempre.
2. target: 
  > define a versão do JavaScript para qual o código será compilado. Exemplo: ES6.
3. rootDir: 
  > define a raiz dos arquivos do projeto. É comum utilizar “./src” aqui, já que é onde os códigos-fonte costumam ficar.
4. outDir: 
  > define a pasta de saída do código compilado. Pode-se agrupar os arquivos .js gerados durante a compilação em um diretório nomeado a seu critério, mas é comum usar “./dist” ou “./build”.
5. esModuleInterop: 
  > permite a compilação de módulos ES6 para CommonJS. É isso que possibilita a você usar a sintaxe de importação padrão do TypeScript com módulos do ECMAScript, por exemplo.
6. strict: 
  > ativa a verificação estrita (mais rigorosa) de tipo.
7. include: 
  > inclui os arquivos ou diretórios mencionados na compilação, como “src/“.
8. exclude: 
  > exclui os arquivos ou diretórios mencionados na compilação, por exemplo “build” ou “node_modules”.




