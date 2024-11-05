let pessoa = {
    nome: 'Caio',
    sobrenome: 'Henrique',
    idade: 20,
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }

}

console.log(pessoa.nomeCompleto());