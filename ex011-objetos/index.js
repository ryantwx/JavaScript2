// const pessoal =  {
//     nome: 'ryan',
//     sobrenome: 'Silva',
//     idade: 17
// }
// console.log(pessoal.nome)
// console.log(pessoal.sobrenome)
// console.log(pessoal.idade)

// function criarP (nome, sobrenome, idade){
//     return{
//         nome:nome,
//         sobrenome:sobrenome,
//         idade:idade,

//     }
// }
// const pessoa2 = criarP('oi', 'sa','17')
// console.log(pessoa2.idade)

const pessoal =  {
    nome:'ryan',
    sobre:'slva',
    idade: 17,

    falar (){
        console.log(`${this.nome}`)
        console.log(`${this.sobre}`)
        console.log(`${this.idade}`)
        
    }
}
pessoal.falar()
