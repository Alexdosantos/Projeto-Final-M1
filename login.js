
// AQUI REALIZEI O GET PARA PUXAR O USÚARIO E SENHA , E VERIFICAR SE OS DADOS QUE O USÚARIO É COMPATIVÉL

const login = async (username , password) => {
    const resposta = await fetch (`http://localhost:3000/usuarios?username=${username}&password=${password}`)

    if(resposta.ok) {
        const data = await resposta.json()
        
        // Verifica se há dados de usuário correspondentes
        if(data.length > 0) {
          // O usuário foi autenticado com sucesso
            return true
        
        } else { 
            // As credenciais de login são inválidas
            return false 
        }
    
        // As credenciais de login são inválidas
    } else {
        return false
    }
}

const loginUsuario = async () => {
    const  username = document.querySelector('.username').value
    const  password = document.querySelector('#password').value

    const autentificacao = await login(username ,password)

    if (autentificacao) {
        window.location.href = 'pacientes.html'
    } else {
        alert('Nome de usuário ou senha incorretos. Tente novamente.')
    }
}
document.querySelector('#btn-entrar').addEventListener('click', loginUsuario);



const apiUrl = 'http://localhost:3000/usuarios';

const cadNewUsuario = async (username, password) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

