
    function gerar() {
        let nome = document.getElementById('nome').value;
        let sobrenome = document.getElementById('sobrenome').value
        let peso = document.getElementById('peso').value;
        let altura = document.getElementById('altura').value;
        
        let tudo = "Nome: " + nome + " " + sobrenome + ", Peso: " + peso + ", Altura: " + altura;
        
        let resultado = document.getElementById('resultado');
       

        resultado.innerText = tudo;
    }
    // O `.value` é usado para acessar o valor atual de um elemento de formulário em HTML, como um campo de texto (`<input type="text">`). Ele permite recuperar o texto digitado pelo usuário nesse campo.
    
    
