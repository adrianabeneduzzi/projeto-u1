//Escreva uma função que receberá um valor n e percorrerá um loop
//Para exibir no console o valor na posição N da sequencia de fibonacci
//O número é igual a soma dos 2 anteriores
//Exemplo fibonacci(0) -> 0
//Exemplo fibonacci(1) -> 1
//fibonacci(6) -> 8



        function fibonacci(n) {  
            if(n < 2){
                return n;
        }

        //Exemplo 1
        //let anterior = 1;
        //let penultimo = 0;

        /*for(let i = 2; i <= n; i++){
            if(i==n){
                return penultimo + anterior;
        }
        let temp = penultimo;
        penultimo = anterior;
        anterior = temp + penultimo;      
        }*/

        //Exemplo 2
        let posicao = 2;
        let anterior = 1;
        let penultimo = 0;

        while(true){
            if(posicao == n){
            return penultimo + anterior;
        }
        let temp = penultimo;
        penultimo = anterior;
        anterior = temp + penultimo;
        posicao++;
    }
}
   
