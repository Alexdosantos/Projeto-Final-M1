const login = async (username) => {
    const response = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    if (response.ok) {
      // o usuário foi autenticado com sucesso
      return true;
    } else {
      // as credenciais de login são inválidas
      return false;
    }
  }
  
  const castratoLogin = async () => {
    const username = document.querySelector('#').value;
    const password = document.querySelector('#').value
  
    const autentificacaoLogin = await login(username)
  
    if (autentificacaoLogin) {
      // o usuário foi autenticado com sucesso
      window.location.href = 'senha.html' // redireciona para a página 'pacientes.html'
    } else {
      // as credenciais de login são inválidas
      alert('Nome de usuário ou senha incorretos. Tente novamente.')
    }
  }
  
  document.querySelector('#').addEventListener('click', castratoLogin);
  