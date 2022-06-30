//exemplo for
let valores = [1,2,3,4,5];

for(let i = 0; i < valores.length; i++){
    valores[i] = valores[i] * 2;
    console.log(valores[i]);
}

//exemplo for of
let dias = ["segunda", "terça", "quarta", "quinta", "sexta"];

for(let dia of dias){
    console.log(dia);
}

//exemplo while

let num = 1;

while(num < 10){
    console.log("valor:" + num);
    num = num + 2;
}

//exemplo do While

let num1= 1;
do{
    console.log(num1);
    num1 ++;
}
while(num1 < 10);