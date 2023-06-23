// Sintaxe geral
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        // console.log(`Hello ${name}!`);
    }
    Person.prototype.comer = function () {
        console.log("".concat(this.name, " est\u00E1 comendo!"));
    };
    return Person;
}());
var p1 = new Person('Luiz', 30);
// aqui estamos passando somente dois parâmetros, atente-se ao valor do atributo p2.weight
var p2 = new Person('João', 25);
console.log(p1.name, p1.age);
console.log(p2.name, p2.age, p2.weight);
p1.comer();
p2.comer();
