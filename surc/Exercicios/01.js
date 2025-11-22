// desconto em compra;
// refra de negócio;
// se valor compra >= 100 - 10% de desconto;
// se valor compra < 100 não tem desconto;
// crie uma função que executa isso;

//let escopoGlobal = 10 //escopo global

function calcularDesconto(valorCompra) {
    let desconto = 0 // escopo de função
    if(valorCompra >= 100){
        //desconto = valorCompra * 0.90;
        desconto = valorCompra * 0.10;
    } else {
        valorCompra;
    }
    
    let valorFinal = valorCompra - desconto;
    return{
        desconto,
        valorCompra,
        valorFinal
    }
}

console.log(calcularDesconto(90));

