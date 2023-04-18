const cadNewUsuario = async (nome, username ) => {
   
  const response = await fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({nome, username })
  });

  if (response.ok) {
    // o usuário foi cadastrado com sucesso
    return true;
  } else {
    // o cadastro falhou
    return false;
  }
}


const cadastraNewUser= async () => {
  const name = document.querySelector('#new-nome').value;
  const username = document.querySelector('#new-email').value ;
  


  const cadastroSucesso = await cadNewUsuario(name, username );

  if (cadastroSucesso) {
    // o usuário foi cadastrado com sucesso
    window.location.href = 'senha.html'; // redireciona para a página 'senha.html'
  } else {
    // o cadastro falhou
    alert('Não foi possível cadastrar o usuário. Tente novamente.');
  }
}

const prosseguir = document.querySelector('#btn-prosseguirCAd')

prosseguir.addEventListener('click',  cadastraNewUser);
//console.log(cadastraNewUser)
