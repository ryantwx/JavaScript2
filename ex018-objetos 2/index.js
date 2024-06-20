const pesssoa = {
    nome: 'ryan',
    sobrenome: 'silva',
    idade : 29,
    endereco: {
        rua : 'tal tal tal',
        numero:'123213'
    }
}
//Atribuição via desetruturação
const {nome, sobrenome, idade , endereco:{rua,numero}} = pesssoa

console.log(nome)
console.log(pesssoa.nome)