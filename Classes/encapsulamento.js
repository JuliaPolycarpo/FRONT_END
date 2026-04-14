 export class Carro {
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
    idade(){
        const data = new Date();
        return data.getFullYear() - this.ano;
    }
}

const meuCarro = new Carro("Opala", 1972);
const carroJúlia = new Carro("BYD Seal", 2025);

console.log(meuCarro.nome);
console.log("A idade do meu carro é " + meuCarro.idade() + " anos.")

console.log("O carro da Júlia é um " + carroJúlia.nome + " e tem " + carroJúlia.idade() + " anos.");
