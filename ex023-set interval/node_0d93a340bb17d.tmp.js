function mostraHora(){
    let date = new Date()
    return date.toLocaleTimeString('pt-br',{
        hour12:false
    })
}
setInterval(function(){
    console.log(mostraHora())
} ,1000)