//Uma função que recebe dois argumentos , altura e largura de uma imagem , onde ira retorna trua se a função estiver no modo paisagem 
function ePaisagem(altura,largura){
    if(altura===566 && largura===1080){
       
        return true
    } 
    else{
      
        return false
    }

}
console.log(ePaisagem(56,1080))