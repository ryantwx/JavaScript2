// const dataAtual = new Date()
// const anoAtual = dataAtual.getHours();

// console.log(anoAtual) 
let  data = new Date()
let dia = data.getDay()
console.log(dia)

switch(dia){
    case 0:
        dia ='domingo' 
    break
    case 1:
        dia ='segunda' 
    break
    case 2:
        dia='tera' 
    break
    case 3:
        dia='quarta' 
    break
    case 4:
        dia ='quinta' 
    break
}
console.log(dia)