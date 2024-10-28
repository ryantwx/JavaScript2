//Essas funções nao afetam o escopo global 

// (function(){
//     console.log(123123213123123)
// })
// ()

(function(idade , peso , altura){
    const sobrenome = 'silva'
    function criaNome(nome){
        return nome +'  ' + sobrenome
    }
    function falaNome (){
        console.log(criaNome('Ryan'))
    }
    falaNome()

    console.log(idade, peso, altura)
})()
//Protege toda a parte do codigo dentro do seu escopo lexico 

// É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes /////principais. A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locai poluam o escopo global
