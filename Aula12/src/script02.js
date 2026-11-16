// Objetos

// Construtores de Objetos

// const pessoa = {
//   nome: "Richard",
//   sobrenome: "Oliveira",
//   idade: 19,
//   altura: 1.75,
// };

function Pessoa(nome, sobrenome, idade, altura) {
  this.nomePessoa = nome;
  this.sobrenomePessoa = sobrenome;
  this.idadePessoa = idade;
  this.alturaPessoa = altura;
}

const minhaPessoa = new Pessoa("Richard", "Oliveira", 19, 1.75);

const meuIrmao = new Pessoa("Howard", "Alexandre", 5, 1.10);

console.log(minhaPessoa);
console.log(meuIrmao);

meuIrmao.carro = "Porsche";
minhaPessoa.moto = "Ducati";

console.log(Pessoa);
