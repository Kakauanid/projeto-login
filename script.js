const senhaInput = document.getElementById('senha');
const botaoVerSenha = document.getElementById('btn-ver');
const olhoAberto = document.getElementById('olho-aberto');
const olhoFechado = document.getElementById('olho-fechado');

botaoVerSenha.addEventListener('click', () => {
    const tipo = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
    senhaInput.setAttribute('type', tipo);

    olhoAberto.style.display = tipo === 'text' ? 'none' : 'inline';
    olhoFechado.style.display = tipo === 'text' ? 'inline' : 'none';

    botaoVerSenha.src = tipo === 'text' ? 'imagens/olho.png' : 'imagens/olho.png';
 });