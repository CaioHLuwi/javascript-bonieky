let cores = [
    {nome: 'Preto', qt: 10},
    {nome: 'Laranja', qt: 5},
    {nome: 'Branco', qt: 15},
    {nome: 'Cinza', qt: 20}
]

/*
for(let n = 0; n < cores.length ; n++) {
    console.log(`${cores[n].nome} - ${cores[n].qt}`);
}
*/

for(let i in cores){
    console.log(`${cores[i].nome} - ${cores[i].qt}`);
}

/*
for (let cor of cores){
    console.log(`Nome ${cor.nome} - ${cor.qt}.`)
}
*/
