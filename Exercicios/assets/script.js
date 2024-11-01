function calculaPorcentagem(n1, n2) {
    return (n2 / n1) * 100;
}

let x = 202;
let y = 41;
let pct = calculaPorcentagem(x, y);
console.log(`${pct}% de ${x} é ${y}.`)