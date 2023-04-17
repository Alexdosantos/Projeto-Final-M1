const cadNewUsuario = async (username, password) => {
  console.log(cadNewUsuario)
  const response = await fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (response.ok) {
    // o usuário foi cadastrado com sucesso
    return true;
  } else {
    // o cadastro falhou
    return false;
  }
}

const cadastraNewUser = async () => {
  const username = document.querySelector('#login').value;
  const password = document.querySelector('#password').value;

  const cadastroSucesso = await cadNewUsuario(username, password);
  console.log(cadNewUsuario)
  if (cadastroSucesso) {
    // o usuário foi cadastrado com sucesso
    window.location.href = 'senha.html'; // redireciona para a página 'senha.html'
  } else {
    // o cadastro falhou
    alert('Não foi possível cadastrar o usuário. Tente novamente.');
  }
}




document.querySelector('#btn-prosseguir').addEventListener('click', cadastraNewUser);
console.log(btn-cadastrar)