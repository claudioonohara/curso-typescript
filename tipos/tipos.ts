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