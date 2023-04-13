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
          <button onclick="editarCadastro(${post.id})"   class="editar" id="editar" ><i class="fa-solid fa-pen" style="color: #2f80ed;"></i></i></button>
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


const updatePost = async (updatedPost, id) => {
  await fetch(`http://localhost:3000/cadastro-pacientes/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, /',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedPost)
  });
    IdAtual = null
}

//document.querySelector('#save-alteracao').addEventListener('click', updatePost)
//console.log(updatePost)


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
   const profissao = document.querySelector('#profissao').value
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
      profissao,
      ensino,
      estadoCivil,
      mae,
      pai,
  }


  await cadastro(post)

}

document.querySelector('#criar-newPaciente').addEventListener('click', saveCadastro )


//AQUI É A PARTE DE DELETAR

const deletarCadastro = async (id) => {
  console.log(deletarCadastro)
  await fetch (`http://localhost:3000/cadastro-pacientes/${id}` ,{
      method: 'DELETE'
  })
  getPosts()

  
}
document.querySelector('#excluir').addEventListener('click', deletarCadastro)

                      //AQUI É A PARTE DE EDITAR



const editarCadastro = async (id) => {
 editarId = id
 const apiResponse = await  fetch (`http://localhost:3000/cadastro-pacientes/${id}`)
 const posts = await apiResponse.json()

    document.querySelector('#edit-cpf').value = posts.cpf
    document.querySelector('#edit-nome').value = posts.nome
    document.querySelector('#edit-dataNascimento').value = posts.dataNascimento
    document.querySelector('#edit-email').value = posts.email
    document.querySelector('#edit-genero').value = posts.genero
    document.querySelector('#edit-nacionalidade').value = posts.nacionalidade
    document.querySelector('#edit-naturalidade').value = posts.naturalidade
    document.querySelector('#edit-profissao').value = posts.profissao
    document.querySelector('#edite-escolaridade').value = posts.ensino
    document.querySelector('#edit-estadoCivil').value = posts.estadoCivil
    document.querySelector('#edit-mae').value = posts.mae
    document.querySelector('#edit-pai').value = posts.pai

    modalEditPaciente.showModal()
   
   
    
}
document.querySelector('#editar').addEventListener('click', editarCadastro)


//AQUI É A PARTE QUE PEGO TODA A ALTERAÇÃO DA EDIÇÃO ACIMA E COLOCO OS NOVOS VALORES DENTRO DE saveAlterecao.

const saveAlteracao = async () => {
  const cpf = document.querySelector('#edit-cpf').value
  const nome = document.querySelector('#edit-nome').value
  const dataNascimento = document.querySelector('#edit-dataNascimento').value
  const email = document.querySelector('#edit-email').value
  const genero = document.querySelector('#edit-genero').value
  const nacionalidade = document.querySelector('#edit-nacionalidade').value
  const naturalidade = document.querySelector('#edit-naturalidade').value
  const profissao = document.querySelector('#edit-profissao').value
  const ensino = document.querySelector('#edite-escolaridade').value
  const estadoCivil = document.querySelector('#edit-estadoCivil').value
  const mae = document.querySelector('#edit-mae').value
  const pai = document.querySelector('#edit-pai').value

  const updatedPost = {
    cpf,
    nome,
    dataNascimento,
    email,
    genero,
    nacionalidade,
    naturalidade,
    profissao,
    ensino,
    estadoCivil,
    mae,
    pai,
  }

  await updatePost(updatedPost, editarId)
  modalEditPaciente.close()
  getPosts()
}

document.querySelector('#save-alteracao').addEventListener('click', saveAlteracao)
 

