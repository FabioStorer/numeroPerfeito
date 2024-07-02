const prompt = require('prompt-sync')();

function verificacao(num) {
    let perfeito = 0;
    if (num % 2 != 0) {
        console.log(num, 'não é um número perfeito.');
    }
    for (let i = 1; i < num; i++) {
        if (perfeito == num) {
            return console.log(num, 'é um número perfeito.');
        } else if (num % i == 0) {
            perfeito += i;
        }
    }
}

console.log('Olá. Irei verificar para você se o número fornecido é ou não um número perfeito.');
let numero = prompt('Digite o número a ser verificado: ');
verificacao(numero);