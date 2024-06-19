var main = new Date()
var atualdia = main.getDay()

switch(atualdia){
    case 0:
        atualdia ='Domingo'
    break
    case 1:
        atualdia = 'Segunda'
    break
    case 2:
        atualdia ='Terça-feira'
    break
    case 3:
        atualdia = 'Quarta-feira'
    break
    case 4:
        atualdia ='Quinta-feira'
    break
    case 1:
        atualdia = 'Sexta-feira'
    break

    case 0:
        atualdia ='Sabado'
    break
    
}
var data = main.getDate()
var mes = main.getMonth()

switch(mes){
    case 1:
        mes= 'Janeiro'
    break
    case 2:
        mes= 'Fevereiro'
    break
    case 3:
        mes= 'Março'
    break
    case 4:
        mes= 'Abril'
    break
    case 5:
        mes= 'Maio'
    break
    case 6:
        mes= 'Junho'
    break
    case 7:
        mes= 'Julho'
    break
    case 8:
        mes= 'Agosto'
    break
    case 9:
        mes= 'Setembro'
    break
    case 10:
        mes= 'Outubro'
    break
    case 11:
        mes= 'Novembro'
    break
    case 12:
        mes= 'Dezembro'
    break
    
}
var ano = main.getFullYear()
var hora = main.getHours()
var minutos = main.getMinutes()

var answer = `${atualdia}  ${data} de ${mes} de ${ano}  as ${hora}:${minutos}`
var res = document.getElementById('resultado')

res.innerText = answer


