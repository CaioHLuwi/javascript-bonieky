/*
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
Uso da função:
*/

function calcularImovel(metragem, quartos){
    let m2 = 3000; // Valor do m2 é R$ 3.000,00
    let preco = 0;

    switch(quartos){
        case 1:
        default:
            preco = metragem * (m2 * 1.0);
        break;
        case 2:
            preco = metragem * (m2 * 1.2);
        break;
        case 3:
            preco = metragem * (m2 * 1.5); // Muda primeiro o valor do metro quadrado
        break;
    }
    return preco
}

let metragem = 123;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);

console.log( quartos <= 3 ? `A casa custa R$ ${preco}` : preco);