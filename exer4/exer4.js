
//exemplo em switch
let simbolo1 = "R$";
let simbolo2 = "$";
let simbolo3 = "£";
function moeda(simbolo) {
    switch(simbolo) {
        case "R$":
            console.log("Real");
            break;
        case "$":
            console.log("Dolar");
            break;
        case "£":
            console.log("Libra");
            break;
        default:
            console.log("Não encontrado");
            break;
    }
}

//exemplo com condições
function moeda2(simbolo){
    if (simbolo == "R$") {
    console.log("Real");

    }else if(simbolo == "$") {
    console.log("Dolar");

    }else if(simbolo == "£"){
    console.log("Libra");

    }else{
    console.log("Não encontrado");
    
    }

} 

//2:58