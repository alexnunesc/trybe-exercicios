# Sistema de módulos.
  Módulos em Node são partes de código, que são organizados em arquivos, que possuem escopo própio.

  O Node tem 3 tipos de módulos.

  Internos.
  Locais.
  De Tercerceiros.


# Módulos internos
  Os módulos internos (ou **core modules**) são inclusos no Node.js e instalados junto com ele quando baixamos o runtime. Alguns exemplos de core modules são:

  > fs:
  fornece uma API para interagir com o sistema de arquivos de forma geral;

  > url:
  provê utilitários para ler e manipular URLs;

  > util:
  oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.

  > os:
  oferece ferramentas e funcionalidades relacionadas ao sistema operacional.


# Módulos locais.

  Os módulos locais são aqueles definidos juntamente à nossa aplicação. Eles representam as funcionalidades ou partes do nosso programa que foram separados em arquivos diferentes. Podem ser publicados no NPM, para que outras pessoas possam baixá-los e utilizá-los

# Módulos de terceiros.

  Os módulos de terceiros são aqueles criados por outras pessoas desenvolvedoras e disponibilizados para uso por meio do npm. Nós também podemos criar e publicar nossos próprios módulos, seja para utilizarmos em diversas aplicações diferentes, seja para permitir que outras pessoas os utilizem.


# Maneiras de importar e exportar módulos.

  Quando queremos utilizar o conteúdo de um módulo ou pacote de outro arquivo no Node.js, precisamos importar esse módulo/pacote para o contexto atual no qual estamos.

  Para isso, existem dois sistemas de módulos difundidos na comunidade JavaScript:

  Módulos ES6;

  Módulos CommonJS.

# importa

  > const nomeModule = require('nomeModule')

# CommonJS.

  No CommonJS as palavras-chaves utilizadas para importação e exportação de módulos são, respectivamente, require() e module.exports.
