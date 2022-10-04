//O Javascript permite que a gente crie, leia e delete cookie através da propriedade document.cookie.

//Para criar um cookie, você só precisa atribuir à propriedade document.cookie uma string contendo o nome e o valor do que se pretende armazenar:

/* document.cookie = 'email=isabella@email.com'; */

const myCookie = document.cookie;
console.log(myCookie) // email=isabella@email.com