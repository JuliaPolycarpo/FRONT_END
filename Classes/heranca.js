import {Carro} from './encapsulamento.js';


class Modelo extends Carro{
    constructor(nome, ano, modelo){
        super(nome, ano);
        this.modelo = modelo;
    }
    exibir(){
        return "Este " + this.nome + " é um modelo " + this.modelo + " e tem " + this.idade() + " anos.";
    }
}

const carroJúlia2 = new Modelo("BYD", 2024, "Song Pro");
console.log(carroJúlia2.exibir());