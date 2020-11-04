//string 
let nome = 'J'
console.log(nome)
// nome = 28

//numbers
let idade = 28
//idade = 'Ana'
idade = 28.5
console.log(idade)

//boolean
let possuiHobbies = false
//possuiHobbies = 1
console.log(possuiHobbies)

//tipo dianimico(declarando variavel sem inicializar e sem declarar tipo a torna dinamica, tipo any)
let minhaIdade 
minhaIdade = 26
console.log(typeof minhaIdade)
minhaIdade = 'a idade é 26'
console.log(typeof minhaIdade)

//tipo explicito
let minhaIdadeTipoExplicito: number 
minhaIdadeTipoExplicito = 26
console.log(typeof minhaIdadeTipoExplicito)
// minhaIdadeTipoExplicito = 'a idade é 26'
// console.log(typeof minhaIdadeTipoExplicito)

//string 
let nomeExplicito: string = 'J'
console.log(nomeExplicito)

//numbers
let idadeExplicito: number = 28
idadeExplicito = 28.5
console.log(idadeExplicito)

//boolean
let possuiHobbiesExplicito: boolean = false
console.log(possuiHobbiesExplicito)

//array
let hobbies: any[] = ["nadar","correr"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [1, 2, 3]
console.log(hobbies)

//tuplas (array com elementos com tipos definidos(por inferencia ou explicitamente))
let endereco: [string, number, string] = ["a" , 5 , "b"]
console.log(endereco)
endereco = ["x", 1 , "y"]
console.log(endereco)

//emums
enum Cor {
    Cinza, //0
    Verde = 100,
    Azul = 10,
    Preto,
    Lilas,
    Vermelho = 10
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Preto, Cor.Lilas ,Cor.Vermelho)

//any
let carro: any = 'carro texto'
console.log(carro)
carro = { marca: 'atributo marca', ano: 2020}
console.log(carro)

//funcoes
function retornaTexto(): string{
    return 'texto'
}

console.log(retornaTexto())

function digaOi(): void {
    console.log('ola')
    //return 'ola'
}
digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(2, 6.8))

let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(calculo(5, 6))

//objeto

let usuario = {
    nome: 'a',
    idade: 1
}

console.log(usuario)

let usuarioExplicito: { nome: string, idade: number }= {
    nome: 'b',
    idade: 2
}

console.log(usuarioExplicito)

//alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string    
}

let funcionario: Funcionario = {
    supervisores: ['funcA', 'funcB'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'ponto normal'
        } else{
            return 'fora do horario'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)

//checando tipos
let valor = 30

if(typeof valor === "number") {
    console.log("é um number")
} else{
    console.log(typeof valor)
}

//never 
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0){
            falha('Preço inválido')
        }
    }
}

produto.validarProduto()

let altura = 12
//altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'a',
    tel1: '1',
    tel2: null
}

console.log(contato1.tel2)

let podeSerNulo = null // eh tipo any
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

let podeSerSomenteNulo: null = null
console.log(podeSerSomenteNulo)
