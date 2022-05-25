/*let objeto = {
    objeto2: {
        vetor: [1,2, {valor:55}]
    }
};

//Qual opção exibirá o valor 55?

console.log(objeto["objeto2"].vetor.valor);

console.log(objeto.objeto2.vetor.valor);

console.log(objeto["objeto2"]["vetor"][2].valor);

console.log(objeto.objeto2,vetor[3].valor);*/

function revisao(valor1, valor2, valor3){

    let outroValor = valor1 + 2;

    let maisUm = valor2 + valor3;



    let vetor = [valor3, valor1, maisUm, valor2, outroValor];



    console.log(`A soma de ${vetor[2]} está certa? Ou ${vetor[1] + 2} = ${vetor[4]} parece melhor?`);

}


revisao(2, "5", "zero");