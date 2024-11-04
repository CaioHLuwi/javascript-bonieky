function calcSquares(a, b) {
    const square = (x) => {
        return Math.sqrt(x);
    }

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

let a = 4;
let b = 10;

console.log()

console.log(`A soma da raiz quadrada de ${a} e ${b} é ${calcSquares(a, b).toFixed(2)}`);