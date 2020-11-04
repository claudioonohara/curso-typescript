"use strict";
//string 
var nome = 'J';
console.log(nome);
// nome = 28
//numbers
var idade = 28;
//idade = 'Ana'
idade = 28.5;
console.log(idade);
//boolean
var possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//tipo dianimico(declarando variavel sem inicializar e sem declarar tipo a torna dinamica, tipo any)
var minhaIdade;
minhaIdade = 26;
console.log(typeof minhaIdade);
minhaIdade = 'a idade é 26';
console.log(typeof minhaIdade);
//tipo explicito
var minhaIdadeTipoExplicito;
minhaIdadeTipoExplicito = 26;
console.log(typeof minhaIdadeTipoExplicito);
// minhaIdadeTipoExplicito = 'a idade é 26'
// console.log(typeof minhaIdadeTipoExplicito)
//string 
var nomeExplicito = 'J';
console.log(nomeExplicito);
//numbers
var idadeExplicito = 28;
idadeExplicito = 28.5;
console.log(idadeExplicito);
//boolean
var possuiHobbiesExplicito = false;
console.log(possuiHobbiesExplicito);
//array
var hobbies = ["nadar", "correr"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [1, 2, 3];
console.log(hobbies);
//tuplas (array com elementos com tipos definidos(por inferencia ou explicitamente))
var endereco = ["a", 5, "b"];
console.log(endereco);
endereco = ["x", 1, "y"];
console.log(endereco);
