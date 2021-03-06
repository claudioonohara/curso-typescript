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
//emums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Preto"] = 11] = "Preto";
    Cor[Cor["Lilas"] = 12] = "Lilas";
    Cor[Cor["Vermelho"] = 10] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Preto, Cor.Lilas, Cor.Vermelho);
//any
var carro = 'carro texto';
console.log(carro);
carro = { marca: 'atributo marca', ano: 2020 };
console.log(carro);
//funcoes
function retornaTexto() {
    return 'texto';
}
console.log(retornaTexto());
function digaOi() {
    console.log('ola');
    //return 'ola'
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 6.8));
var calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
//objeto
var usuario = {
    nome: 'a',
    idade: 1
};
console.log(usuario);
var usuarioExplicito = {
    nome: 'b',
    idade: 2
};
console.log(usuarioExplicito);
var funcionario = {
    supervisores: ['funcA', 'funcB'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'ponto normal';
        }
        else {
            return 'fora do horario';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '10';
console.log("Minha nota \u00E9 " + nota);
//checando tipos
var valor = 30;
if (typeof valor === "number") {
    console.log("é um number");
}
else {
    console.log(typeof valor);
}
//never 
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
var altura = 12;
//altura = null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'a',
    tel1: '1',
    tel2: null
};
console.log(contato1.tel2);
var podeSerNulo = null; // eh tipo any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
var podeSerSomenteNulo = null;
console.log(podeSerSomenteNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
