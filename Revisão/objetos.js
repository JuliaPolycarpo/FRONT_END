const pessoa = {
    nome: 'João',
    sobrenome: 'Rocella',
    idade: 40,
    cargo: 'Instrutor'
};
const entidade = new Map([
    ["nome", "João"],
    ["sobrenome", "Rocella"],
    ["idade", 40],
    ["cargo", "Instrutor"]
]);

console.log(entidade.get("sobrenome"));
console.log(pessoa.sobrenome);

const professor = JSON.stringify(pessoa);
console.log(professor);

const aluno = '{"nome":"Júlia", "sobrenome":"Polycarpo", "idade": 17, "matricula": "9094"}';
const alunoObjeto = JSON.parse(aluno);
console.log(alunoObjeto)