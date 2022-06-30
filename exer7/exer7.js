/*//exemplo com break
let num = 1;

while(num < 10){
    console.log(num);
    if(num == 6){
        break;
    }
    num++;
}

//exemplo com break 2

for(let numero2 of [1,2,3,4,5,6,7]){
    console.log(numero2);
    if(numero2 ==5){
        break;*/
    //}
//}

//exemplo continue

for(let numero3 of [1,2,3,4,5,6,7]){
    if(numero3 == 5 || numero3 == 7){
        continue;
    }
    console.log(numero3);
}