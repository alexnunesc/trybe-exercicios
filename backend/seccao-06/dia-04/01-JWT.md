# Interessante, né? O JWT (JSON Web Token) é um token gerado a partir de dados “pessoais” que pode ser trafegado pela internet ao fazer requisições para APIs e afins. Mas atenção: toda a informação que colocamos no JWT é pública e qualquer pessoa com o token consegue ler essas informações. O mecanismo de segurança do JWT permite, no entanto, que apenas quem tem a senha consiga alterar as informações contidas em um token.

A coisa toda funciona assim:

1. O navegador solicita que o usuário digite seu login e senha.

2. O navegador então envia esse login e senha ao servidor, para verificar que esses dados estão corretos.

3. Uma vez que valida login e senha, o servidor cria dois objetos: um contendo informações sobre o token que será gerado, que chamamos de header, e outro contendo os dados do usuário e as permissões que aquela pessoa tem, ao qual chamamos de payload.

4. O servidor, então, converte esses dois objetos em JSON, junta-os em uma mesma string e utiliza um algoritmo chamado HMAC para “criptografar” essa string usando um “segredo” que só ele sabe, gerando o que chamamos de assinatura – que nada mais é do que header + payload criptografados.

5. Por fim, o servidor combina o header, o payload originais e a assinatura, criando assim o token.

O token é enviado ao cliente, que o armazena para utilizá-lo nas próximas requisições.
Chamamos de autenticação o processo pelo qual a pessoa usuária consegue, utilizando informações confidenciais como email e senha, efetuar login com sucesso em uma aplicação, tendo como retorno um JSON Web Token que possibilita acessar suas permissões de navegação.

# Na próxima requisição:

1. O navegador envia ao servidor os dados para, por exemplo, cadastrar um novo produto. Juntamente a esses dados, o navegador envia o token que recebeu ao realizar o login.

2. Quando recebe os dados, a primeira coisa que o servidor faz é obter o header e o payload do token e criptografá-los, gerando, mais uma vez, a assinatura.

3. O servidor, então, compara a nova assinatura com a assinatura que foi enviada pelo cliente. Se ambas forem iguais, quer dizer que o conteúdo do header e do payload não foram modificados desde o login.

4. Agora que já sabe que o token é válido, o servidor continua processando a requisição e, por fim, entrega a resposta para o cliente.

O JWT também é usado para autorização, quando precisamos fazer o processo de atestar as permissões de uma pessoa usuária que deseja acessar uma rota ou recurso protegido. Isso exige o envio do token, normalmente no header Authorization, a partir do qual são acessadas as informações necessárias para a verificação.

# Acontece o seguinte:

> A pessoa cliente envia para o servidor as informações do produto e o token modificado.

> O servidor extrai o payload e header do token e, utilizando essas duas informações, gera uma assinatura.

> Ao comparar a assinatura nova com a assinatura enviada pela pessoa cliente, o servidor percebe que há uma diferença! Isso acontece porque criptografar { "admin": false } sempre vai gerar um resultado (uma assinatura, nesse caso) diferente de criptografar { "admin": true }.

> Como a assinatura é diferente, o servidor rejeita a requisição, devolvendo um status de erro com uma mensagem informando que o token é inválido.

# A partir disso, podemos concluir que a autenticação sempre vem antes da autorização.

Perceba que, para que a pessoa usuária consiga alterar o seu token e obter privilégios a mais, ela precisaria gerar uma nova assinatura. Acontece que, para gerar uma nova assinatura, é necessário possuir o segredo, que apenas o servidor possui. Sendo assim, é virtualmente impossível adulterar um token JWT, o que torna essa tecnologia muito confiável para tratar de autenticação.

**⚠️ Aviso: Note que autenticação e autorização são coisas diferentes.**


1. Autenticação é utilizada para verificar sua identidade, realizada por meio de informações confidenciais como email e senha.

2. Autorização verifica as permissões de uma pessoa para acessar ou executar determinadas operações.


# O que é HMAC?
O HMAC é um algoritmo para gerar um MAC (código de autenticação de mensagem) criptografado através de algum algoritmo de hash (algoritmos que codificam mensagens), como md5, sha1 ou sha256, a partir de uma chave secreta (uma senha) e de uma mensagem qualquer.

Por exemplo, se gerarmos o HMAC da mensagem “Olá, tudo bem?”, com o segredo “minhaSenha” e o algoritmo sha1, teremos o seguinte resultado: b88651e71c7c757560722b52e5f1ead754a759d8. No entanto, se alterarmos o texto para “olá, tudo bem?”, mudando apenas a capitalização da primeira letra, o resultado passa a ser ac7016fd2014ca9a79ac2e3ef16b6bd857f91f7a.

Agora, imagine que ao invés de “Olá, tudo bem?” façamos isso com o payload do nosso token. Ao mudar qualquer mínimo detalhe das informações daquele token, a assinatura se torna inválida.

💡Curiosidade: A fórmula do HMAC é a seguinte:

HMAC(K, m) = hash(K1 + hash(K2 + m))

onde:

K é a chave secreta;

m é a mensagem;

hash é a função de hash escolhida (md5, sha1 etc);

K1 e K2 são chaves secretas derivadas da chave original K;

+ é a operação de concatenação de strings.




