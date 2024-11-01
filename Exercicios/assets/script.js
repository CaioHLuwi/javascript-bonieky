function maiorDeIdade(idade){
    if (idade >= 18){
        return true;
    } else {
        return false;
    }
}

let verificacao = maiorDeIdade(2);
console.log(verificacao);

let verificaMaioridade = verificacao ? "Você é maior de idade" : "Você é menor de idade";

console.log(verificaMaioridade);