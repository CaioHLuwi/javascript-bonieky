/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/
function validar(usuario, senha){
    // if(usuario === 'pedro' && senha === 123) {
    //     return true;
    // } else {
    //     return false;
    // }
    validaUsuario = usuario === 'pedro' && senha === 123 ? true : false;

    return validaUsuario;
}

let usuario = 'pedro';
let senha = '123';
let validacao = validar(usuario, Number(senha));
if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!');
}