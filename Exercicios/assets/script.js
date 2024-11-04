// Função padrão para ver o conteúdo das variáveis dentro da página e não apenas no console.

// function addTextDOM(text) {
//     const elementContent = document.querySelector('#content');

//     const paragraph = document.createElement('p');

//     paragraph.textContent = text;

//     elementContent.appendChild(paragraph);
// }

// O exemplo das aulas começa à partir daqui:

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'sal',
    'corante'
];

ingredientes.shift();
ingredientes.pop();

console.log(ingredientes);

console.log(`Total de ingredientes: ${ingredientes.length}`);