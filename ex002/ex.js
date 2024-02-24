// ryan tem 16 anos pesa 70 kg tem 1.75 de altura e seu imc é --------
// ryan naseu em 

const nome = `Ryan`
const peso = 70
const altura =1.75
let imc = peso / altura **2
const nascimento = 2007
let dataAtual = new Date()
let data = dataAtual.getFullYear()
const idade = data - nascimento

console.log (`Voce é ${nome}  nasceu em ${nascimento} tem ${idade} anos de idade , pesa ${peso}Kg tem ${altura} de altura seu imc é ${imc}`)





