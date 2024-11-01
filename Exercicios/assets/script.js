function calculaPorcentagem(n1, n2) {
    let pctCalculada = (n2 / n1) * 100;
    return pctCalculada;
}

let x = 20;
let y = 10;
let pct = calculaPorcentagem(x, y);
console.log(`${pct}% de ${x} é ${y}.`)