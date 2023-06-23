# Eager Loading vs Lazy Loading

Supondo o exemplo anterior, onde temos um banco com as tabelas Addresses e Employees, uma query do typo Lazy no model Addresses vai retornar um objeto do tipo Address, tal como é mostrado no diagrama de classes abaixo:

imagem..


Ou seja, será retornado um objeto de endereço onde existirá um campo com o id da pessoa colaboradora que mora neste endereço.

# Já numa query do tipo Eager, o resultado é um pouco diferente:

Diferentemente de termos um número que representa o id da pessoa colaboradora que mora naquele endereço, recebemos um objeto do tipo Employee dentro do objeto do tipo Address. Isso acontece pois o banco faz o join das tabelas e já traz todos os dados, não só de Address, como também do Employee que vive nele.

Com isso, é possível de imediato fazer um acesso ao primeiro nome de uma pessoa que mora em um determinado endereço por meio da sintaxe address.employee.firstName.


https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/94e113d7-6a86-4536-a1d3-08f55f557811/lesson/63709034-5aec-4c5d-b193-133a60bbd7ca