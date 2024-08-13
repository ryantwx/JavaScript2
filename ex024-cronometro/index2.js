var sec = 0
var min = 0 
var hr = 0 
var interval = 0


function twoDigit(digit){
    if(digit<10){
        return '0'+ digit
    }
    else {
        return digit
    }
}

function start (){
    watch()
    interval= setInterval(watch ,1000)//repete chamadas de funções ou executa trechos de código, com um tempo de espera fixo entre cada chamada. Logo a cada  1 seg(1000 ) ele ira executar a função 'watch'
    
}

function pause(){
    clearInterval(interval)
}

function reset (){
    clearInterval(interval)
    seg =0
    min=0 
    hr= 0 
    document.getElementById('watch').innerHTML='00:00:00'
}
function watch(){
    sec++
    if(sec==60){
        sec=0
        min++
    }if(min==60){
        min=0
        hr++
    }
    
    document.getElementById('watch').innerHTML =twoDigit(hr) +':'+  twoDigit(min) +':'+ twoDigit(sec)
    //Esta dizendo que oq esta em 'watch' iria ser min e sec , e sera exibido no HTML , com o innerHTML
}