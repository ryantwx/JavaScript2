function RetornaData(data){
    if(!(data instanceof Date)){//esta dizendo se o objeto 'data' nao for uma instacia (nao pertence a date ) ira executar o codigo abaixo 
      throw new TypeError('deu erro ') 

    }
}
console.log(new Date)
// esta função verifica se o objeto 'data' nao for uma instacia (nao pertence a date ) ira executar o codigo, se for ira executar o codigo ' thorow de erro  