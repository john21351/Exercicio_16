function saudacao(nome) {
    console.log("Olá, " + nome + "! Bem-vindo ao mundo do JavaScript!");
}

saudacao("João");

var numero = 10;

if (numero > 5) {
    console.log("O número é maior do que 5.");
} else {
    console.log("O número é menor ou igual a 5.");
}

for (var i = 0; i < 5; i++) {
    console.log("Número: " + i);
}

var pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "São Paulo"
};

console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);
console.log("Cidade: " + pessoa.cidade);
