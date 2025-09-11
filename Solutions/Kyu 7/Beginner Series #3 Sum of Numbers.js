// Dado dois números inteiros a e b, que podem ser positivos ou negativos, encontre a soma de todos os inteiros entre eles, incluindo a e b, e retorne esse valor.
// Se os dois números forem iguais, retorne a ou b.

function getSum(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let result = 0;

    for (let i = min; i <= max; i++) {
        result += i;
    }

    return result;
}

const batata = Infinity;

console.log(batata + 1);