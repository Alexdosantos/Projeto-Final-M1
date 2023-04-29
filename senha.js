window.addEventListener('load', () => {
    let cadastroEmAndamento = false;
    
    const cadNewUsuario = async (nome, username, password, password1) => {
      const response = await fetch('https://projeto-final-arnia.onrender.com/usuarios', {
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
        return; // se um cadastro já está em andamento, não faz nada
      }
      cadastroEmAndamento = true // marca que um cadastro está em andamento
    
      const name = document.querySelector('#new-nome').value
      const username = document.querySelector('#new-email').value
    
      // Armazena os valores de nome e username no localStorage
      localStorage.setItem('nome', name)
      localStorage.setItem('username', username)
    
      // Redireciona para a página 'senha.html'
      window.location.href = 'senha.html'
    }
    
    const cadastroSenha = async () => {
      if (cadastroEmAndamento) {
        return; // se um cadastro já está em andamento, não faz nada
      }
      cadastroEmAndamento = true // marca que um cadastro está em andamento
    
      const password = document.querySelector('#senhaCad').value
      const password1 = document.querySelector('#confSenhaCad').value
    


      if (password !== password1) {
        alert('As senhas não coincidem. Por favor, verifique e tente novamente.')
        location.reload()
        return
      }
      
    
    
      // Recupera os valores de nome e username do localStorage
      const nome = localStorage.getItem('nome')
      const username = localStorage.getItem('username')
    
      const cadastroSucesso = await cadNewUsuario(nome, username, password, password1)
    
      if (cadastroSucesso) {
        // o usuário foi cadastrado com sucesso
        alert("cadastro bem sucedido")
         
        
        await fetch(resolve => setTimeout(resolve, 3000))
        window.location.href = 'index.html'
          
  
        // Redireciona para a página 'index.html' após 3 segundos
        
      } else {
        // o cadastro falhou
        alert('Não foi possível cadastrar o usuário. Tente novamente.')
      }
    
      cadastroEmAndamento = false; // marca que o cadastro foi finalizado
    }
    
    const cadastrarSenha = document.querySelector('#btn-cadastrarSenha')
    cadastrarSenha.addEventListener('click', cadastroSenha)
  
    
    // cadastroSenha.onclick = function() {
    //   modalSucesso.showModal()        
    // }
    
  })
  