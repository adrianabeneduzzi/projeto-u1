let alunos = [
    {
        nome: "Maria",
        nota: 8
    },
    {
        nome: "Pedro",
        nota: 4
    },
    {
        nome: "João",
        nota: 10
    },
    {
        nome: "Paulo",
        nota: 9
    },
    {
        nome: "Ana",
        nota: 7
    },
    {
        nome:"Bianca",
        nota: 6
    },
]

//Escreva um loop que percorre o vetor acima e informe se o aluno passou
//condição para passar: nota maior que 7.
//Resolução 1
console.log("FOR");
for(let i = 0; i < alunos.length; i++) {
    if(alunos[i].nota > 7){
        console.log(`${alunos[i].nome} : passou`);
    }
}
//Resolução 2
console.log("-----");
console.log("FOR OF");
for(let aluno of alunos){
    if(aluno.nota > 7){
        console.log(`${aluno.nome} : passou`);
    }
}
     
    //Escreva um loop que percorre o vetor acima e informe se o aluno passou
//condição para passar: nota maior que 7.