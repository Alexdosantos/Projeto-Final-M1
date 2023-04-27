window.addEventListener('load', () => {
  let cadastroEmAndamento = false;

  const cadNewUsuario = async (nome, username, password, password1) => {
    const response = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, username, password, password1 })
    });

    if (response.ok) {
      // o usuário foi cadastrado com sucesso
      return true
    } else {
      // o cadastro falhou
      return false
    }
  }

  const cadastraNewUser = async () => {
    if (cadastroEmAndamento) {
      return // se um cadastro já está em andamento, não faz nada
    }
    cadastroEmAndamento = true; // marca que um cadastro está em andamento

    const name = document.querySelector('#new-nome').value
    const username = document.querySelector('#new-email').value

    // Armazena os valores de nome e username no localStorage
    localStorage.setItem('nome', name)
    localStorage.setItem('username', username)

    
    // Redireciona para a página 'senha.html'
    window.location.href = 'senha.html'
  }
  const prosseguir= document.querySelector('#btn-prosseguirCad')
  prosseguir.addEventListener('click', cadastraNewUser)
  
  



  const cadastroSenha = async () => {
    if (cadastroEmAndamento) {
      return; // se um cadastro já está em andamento, não faz nada
    }
    cadastroEmAndamento = true; // marca que um cadastro está em andamento

    const password = document.querySelector('#senhaCad').value;
    const password1 = document.querySelector('#confSenhaCad').value;

    // Recupera os valores de nome e username do localStorage
    const nome = localStorage.getItem('nome')
    const username = localStorage.getItem('username')

    const cadastroSucesso = await cadNewUsuario(nome, username, password, password1)

    if (cadastroSucesso) {
      // o usuário foi cadastrado com sucesso
      alert('Usuário cadastrado com sucesso!')
      
    } else {
      // o cadastro falhou
      alert('Não foi possível cadastrar o usuário. Tente novamente.')
    }

    cadastroEmAndamento = false; // marca que o cadastro foi finalizado
  }
  const cadastrarSenha = document.querySelector('#btn-cadastrarSenha')

  cadastrarSenha.addEventListener('click', cadastroSenha)
})
