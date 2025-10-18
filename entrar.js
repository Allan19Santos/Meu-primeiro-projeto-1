document.getElementById(`acessarConta`). addEventListener(`submit`, function(event){
    event.preventDefault();

const emailLogin = document.getElementById('emailLogin').value.trim();
const senhaLogin = document.getElementById('senhaLogin').value.trim();

const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

if(!usuarioSalvo){
    alert('Nenhum usuario cadastrado.');
    return;
}
    if(emailLogin === usuarioSalvo.email && senhaLogin === usuarioSalvo) {
        alert(`Bem-vindo, ${usuarioSalvo.nome}!`);
    } else{
        alert(`Email ou senha incorretos!`);
    }
});
