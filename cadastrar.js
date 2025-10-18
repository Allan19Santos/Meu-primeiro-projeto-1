document.getElementById(`criarCadastro`).addEventListener(`submit`, async function(event) {
    event.preventDefault(); 


    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

    if(senha !== confirmarSenha) {
        alert(`Senha diferente!`)
        return;
    }

    const dados = {nome, sobrenome, email, senha};

    localStorage.setItem('dados', JSON.stringify(usuario));
    alert(`Cadastro realizado com sucesso!`);
    this.reset();
});