const getPosts = async () => {
    const postagem = document.querySelector('#content')
    const apiResponse = await fetch("http://localhost:3000/cadastro-pacientes")
    const posts = await apiResponse.json()
    console.log(posts)
    let conteudo = ''
  
    posts.forEach(post => {
      conteudo += `
        <tr>
          <td>${post.id}</td>
          <td>${post.nome}</td>
          <td>${post.cpf}</td>
          <td class="btn-pacientes">
            <button  class="agenda" id="agenda"><i class="fa-solid fa-calendar-minus" style="color: #017849;"></i></button>
            <button class="editar" id="editar" ><i class="fa-solid fa-pen" style="color: #2f80ed;"></i></i></button>
            <button onclick="deletarCadastro(${post.id})"  class="excluir" id="excluir"><i class="fa-solid fa-trash-can" style="color: #eb5757;"></i></button>
          </td>
        </tr>
      `
    });
  
    postagem.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>CPF</th>
            <th class="acao">Ações</th>
          </tr>
        </thead>
        <tbody>
          ${conteudo}
        </tbody>
      </table>
    `
}
  
  window.addEventListener('DOMContentLoaded', getPosts)
  
  //AQUI É A CRIAÇÃO DO CADASTRAMENTO

  const cadastro = async (cad) =>{
    await fetch ("http://localhost:3000/cadastro-pacientes" , {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify(cad)
    })

  }

  const saveCadastro = async () =>  {
     const cpf = document.querySelector('#cpf').value
     const nome = document.querySelector('#nome').value
     const dataNascimento = document.querySelector('#dataNascimento').value
     const email = document.querySelector('#email').value
     const genero= document.querySelector('#genero').value
     const nacionalidade = document.querySelector('#nacionalidade').value
     const naturalidade = document.querySelector('#naturalidade').value
     const Profissão = document.querySelector('#Profissão').value
     const ensino = document.querySelector('#ensino').value
     const estadoCivil = document.querySelector('#estadoCivil').value
     const mae= document.querySelector('#mae').value
     const pai = document.querySelector('#pai').value

     const post = {
        cpf,
        nome,
        dataNascimento,
        email,
        genero,
        nacionalidade,
        naturalidade,
        Profissão,
        ensino,
        estadoCivil,
        mae,
        pai,
    }
   

    await cadastro(post)
  
}
document.querySelector('#criar-newPaciente').addEventListener('click', saveCadastro)


//AQUI É A PARTE DE DELETAR

const deletarCadastro = async (id) => {
    console.log(deletarCadastro)
    await fetch (`http://localhost:3000/cadastro-pacientes/${id}` ,{
        method: 'DELETE'
    })
    getPosts()

    
}
document.querySelector('#excluir').addEventListener('click', deletarCadastro)
