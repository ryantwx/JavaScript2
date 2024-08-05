const relogio = document.querySelector('.LiteralTimer')
const iniciar = document.querySelector('#iniciar')
const pausar  = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')

function mostraHora(){
    let date = new Date()
    return date.toLocaleTimeString('pt-br',{
        hour12:false
    })
}

iniciar.addEventListener('click', function(event){ 
    relogio.innerHTML = setInterval(function(){
        console.log(mostraHora())
    },1000)
})
 //addEventListener adiciona uma evento (no caso o click (clicar)) onde apos o evento realizar a função 
 pausar.addEventListener('click', function(event){ 
    alert('ola')
})
zerar.addEventListener('click', function(event){ 
    alert('asd')
})

