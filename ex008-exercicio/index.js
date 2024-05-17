let pergunta = Number(window.prompt(`Insira um numero`))// indentifica que é um number


if(isNaN(pergunta)){
    window.alert(`insira um numero valido`)

}else{
    

    let span1 = document.getElementById('titulo')
    span1.innerHTML = pergunta
    
    let span2 =document.getElementById('raiz')
    span2.innerHTML = pergunta **(1/2)

    let span3 = document.getElementById('int')
    span3.innerHTML = pergunta

    let span4 = document.getElementById('int2')
    span4.innerHTML = Number.isInteger(pergunta)

    let span5 = document.getElementById('arredondando')
    span5.innerHTML = Math.floor(pergunta)

    let span6 = document.getElementById('arredondando2')
    span6.innerHTML = Math.ceil(pergunta)

   
    let span7 = document.getElementById('casa');
    span7.innerHTML = pergunta.toFixed(2);
    


}


