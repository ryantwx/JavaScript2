function calcular() {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    let peso = document.getElementById('ipeso').value
    let altura = document.getElementById('ialturo').value
    let resultado = document.getElementById('enviar')
    let imc = peso/altura**2

    if (isNaN(peso) || isNaN(altura)) {// Fala se peso não for um numero
        window.alert('Por favor, insira números válidos.');
        return;

    }if (peso === "" || altura === "") {
        window.alert('Por favor, preencha ambos os campos.');
        return;
    }
    if (peso>340){
        window.alert('Por favor, insira números válidos.');
        return;
    }
    else{
        resultado.innerText= 'Seu IMC é :' + imc.toFixed(2)
        return
    }
    
}