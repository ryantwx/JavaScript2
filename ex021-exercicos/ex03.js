function divisao(x) {
    if (isNaN(x)) {
        return 'Por favor insira um numero';
    }
    if (x % 3 === 0 && x % 5 === 0) {
        return 'fizzbuzz';
    }
    if (x % 3 === 0) {
        return 'fizz';
    }
    if (x % 5 === 0) {
        return 'buzz';
    }
    return x;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, divisao(i));//Esta chamando a divisao pra percorrer cada numero de 'i' que sempre adiciona mais 1
}
