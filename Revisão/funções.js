let c = 2;

function somar (a, b) {
    return a + b
}
console.log(somar(5, 10));


const calcularFrete = function (distancia, peso) {
    return (distancia * 0.5) + (peso * 2);
};
console.log("O valor do frete será R$: " + calcularFrete(100, 5));


const calcularFrete3 = distancia => distancia * 0.5;
console.log("O valor do frete será R$: " + calcularFrete3(100));


const calculadora = (a, b, operacao) => {
    return operacao(a, b);
}
const operacao = (a, b) => a + b;
console.log(calculadora(2,3, operacao));