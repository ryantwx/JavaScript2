function rand (max =3000, min = 1000){
    const num = Math.random() *(max-min) + min 
    return Math.floor(num)

}

function f1 (callback){
    setTimeout(function(){
        console.log('f1')
        if (callback) callback()
    }, rand())
    
}
function f2 (callback){
    setTimeout(function(){
        console.log('f2')
        if (callback) callback()
    }, rand())
    
}
function f3 (callback){
    setTimeout(function(){
        console.log('f3')
        if (callback) callback()
    }, rand())
    
}
//callback hell-- uma bosta 
f1(function(){
    f2(function(){
        f3(function(){
            console.log('ola')// função callback pois esta sendo executada depois de uma ação 
        })
    })
})
//Uma função callback é uma função passada a outra função como argumento, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação
//--------------------------------------------------------------------------------------//
f1(f1callback)
//cada callback chama o call back da outra funcao 
//f1 chama call back de f2 
//f2 chama call back de f3
//f3 exibe ola
function f1callback(){
    f2(f2callback)
}
function f2callback(){
    f3(f3callback)
}
function f3callback(){
    console.log('ola')
}
//mesma coisa , formula mais limpa evitando callback hell (arvore de natal)