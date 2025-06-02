// Obtendo os elementos
const senhaInput = document.getElementById('senha');
const usuarioInput = document.querySelector('input[type="text"]');
const botaoVerSenha = document.getElementById('btn-ver');
const olhoAberto = document.getElementById('olho-aberto');
const olhoFechado = document.getElementById('olho-fechado');
const form = document.querySelector('form'); 
// Dados de login
const usuarioValido = "usuario123";
const senhaValida = "senha123";

// Exibindo ou escondendo a senha
botaoVerSenha.addEventListener('click', () => {
    const tipo = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
    senhaInput.setAttribute('type', tipo);

    olhoAberto.style.display = tipo === 'text' ? 'none' : 'inline';
    olhoFechado.style.display = tipo === 'text' ? 'inline' : 'none';
});

// Validação do login
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o envio do formulário

    const usuario = usuarioInput.value;
    const senha = senhaInput.value;

    // Verificando as credenciais
    if (usuario === usuarioValido && senha === senhaValida) {
        // Salvar o login no localStorage (opcional)
        localStorage.setItem('logado', 'true');
        localStorage.setItem('usuarioLogado', usuario);
        
        // Redirecionando para a página de login bem-sucedido
        window.location.href = "pagina-logado.html"; 
    } else {
        // Caso o login falhe
        alert('Usuário ou senha inválidos. Tente novamente.');
    }
});

function logout() {
    localStorage.removeItem('logado');
    localStorage.removeItem('usuarioLogado');
    window.location.href = "index.html";
}