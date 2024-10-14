const nome = 'ryan '
function P1 (){

     const nome = 'ryan2 '
    console.log(nome)
}
function usarP1 (){
    P1() 
    const nome = 'ryan2 '
}
usarP1()
// a função sempre dara prioridade a seu escopo lexico , ou a proximidade