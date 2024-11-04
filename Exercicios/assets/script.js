// Função padrão para ver o conteúdo das variáveis dentro da página e não apenas no console.

function addTextDOM(text) {
    const elementContent = document.querySelector('#content');

    const paragraph = document.createElement('p');

    paragraph.textContent = text;

    elementContent.appendChild(paragraph);
}

// O exemplo das aulas começa à partir daqui:

let colors = ['blue', 'red', 'green', 'yellow'];

addTextDOM(colors);

console.log(colors);