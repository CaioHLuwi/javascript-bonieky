let personagem = {
    nome: 'Caio',
    idade: 90,
    pais: 'Brasil',
    itens: ['Picareta', 'Machado', 'Espada'],
    caracteristicas: {
        forca: 5,
        saude: 55,
        stamina: 10
    },
}

personagem.nome = 'Pedro';
personagem.caracteristicas.forca += 5;
personagem.itens.push('Capacete');
let personagemItens = personagem.itens.join(", ");

console.log(`Personagem tem ${personagemItens}`)
