
// AQUI É ONDE PEGO NOME E USERNAME NO LOCALSTORAGE E PASSA PARA PARTE DE BEM VINDO 
const nome = localStorage.getItem('nome')
const primeiroNome = nome.split(' ')[0]
document.querySelector('.name-bold').innerHTML = primeiroNome

const emailLogin = localStorage.getItem('username')
document.querySelector('.email-medico').innerHTML = emailLogin


const getPosts = async () => {
  const postagem = document.querySelector('#content')
  const apiResponse = await fetch("https://projeto-final-arnia.onrender.com/cadastro-pacientes")
  const posts = await apiResponse.json()
  console.log(posts)
  let conteudo = ''

  posts.forEach(post => {
    conteudo += `
      <tr>
       
        <td onclick ="dadosPaciente(${post.id})">${post.id}</td>
        <td onclick ="dadosPaciente(${post.id})">${post.nome}</td>
        <td onclick ="dadosPaciente(${post.id})">${post.cpf}</td>
        <td class="btn-pacientes">
          <button onclick ="abrirProntuario(${post.id})" class="agenda" id="agenda"><i class="fa-solid fa-calendar-minus" style="color: #017849;"></i></button>
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



const filtrarPacientes = async (nome) => {
  const apiResponse = await fetch(`https://projeto-final-arnia.onrender.com/cadastro-pacientes?nome_like=${nome}`)
  const pacientes = await apiResponse.json()
  return pacientes
}


const atualizarTabelaPacientes = async () => {
  const postagem = document.querySelector('#content')
  const filtro = document.querySelector('#input-btn').value
  const pacientes = await filtrarPacientes(filtro)
  let conteudo = ''

  pacientes.forEach(paciente => {
    conteudo += `
      <tr>
        <td onclick="dadosPaciente(${paciente.id})">${paciente.id}</td>
        <td onclick="dadosPaciente(${paciente.id})">${paciente.nome}</td>
        <td onclick="dadosPaciente(${paciente.id})">${paciente.cpf}</td>
        <td class="btn-pacientes">
          <button onclick="abrirProntuario(${paciente.id})" class="agenda" id="agenda"><i class="fa-solid fa-calendar-minus" style="color: #017849;"></i></button>
          <button onclick="editarCadastro(${paciente.id})"   class="editar" id="editar" ><i class="fa-solid fa-pen" style="color: #2f80ed;"></i></i></button>
          <button onclick="deletarCadastro(${paciente.id})"  class="excluir" id="excluir"><i class="fa-solid fa-trash-can" style="color: #eb5757;"></i></button>
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

document.querySelector('#btn-FiltrarPacients').addEventListener('click', atualizarTabelaPacientes)

document.querySelector('#input-btn').addEventListener('input', async () => {
  await atualizarTabelaPacientes();
});





//AQUI É A CRIAÇÃO DO CADASTRAMENTO


const updatePost = async (updatedPost, id) => {
  await fetch(`https://projeto-final-arnia.onrender.com/cadastro-pacientes/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, /',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedPost)
  });
    IdAtual = null
}


const cadastro = async (cad) =>{
  await fetch ("https://projeto-final-arnia.onrender.com/cadastro-pacientes" , {
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
  location.reload()
}
  
document.querySelector('#criar-newPaciente').addEventListener('click', saveCadastro )

// MINI MODAL SUCESSO 

const BtnSalvarCadastro = document.querySelector('#criar-newPaciente')
BtnSalvarCadastro.addEventListener('click', saveCadastro )


const closemiModal = document.querySelector('#btn-fecharSucesso')
 const miModal = document.querySelector('#card-sucesso')
 //const BtnSalvarCadastro = document.querySelector('#criar-newPaciente');
 
 async function sucesso() {
   await miModal.close();
 }
 
 BtnSalvarCadastro.addEventListener('click', async () => {
   miModal.showModal(); 
   setTimeout(sucesso , 6000);  
 });
 
 closemiModal.addEventListener('click', () => {
   saveCadastro(); // aqui você precisa definir o que a função saveCadastro() faz
 });



//AQUI É A PARTE DE DELETAR

const deletarCadastro = async (id) => {
  console.log(deletarCadastro)
  await fetch (`https://projeto-final-arnia.onrender.com/cadastro-pacientes/${id}` ,{
      method: 'DELETE'
  })
  getPosts()

  
}
document.querySelector('#excluir').addEventListener('click', deletarCadastro)

                      //AQUI É A PARTE DE EDITAR



const editarCadastro = async (id) => {
 editarId = id 
 const apiResponse = await  fetch (`https://projeto-final-arnia.onrender.com/cadastro-pacientes/${id}`)
 const posts = await apiResponse.json()

    document.querySelector('#edit-cpf').value = posts.cpf
    document.querySelector('#edit-nome').value = posts.nome
    document.querySelector('#edit-dataNascimento').value = posts.dataNascimento
    document.querySelector('#edit-email').value = posts.email
    // arrumar o bug de apararecer o valor do genero
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
  //console.log(saveAlteracao)
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

function abrirProntuario (id)  {
  window.location.href = `prontuario.html?id=${id}`
  
  
}
 console.log(abrirProntuario)


 const dadosPaciente = async (id) => {
  editarId = id 
  const apiResponse = await  fetch (`https://projeto-final-arnia.onrender.com/cadastro-pacientes/${id}`)
  const posts = await apiResponse.json()
 
     document.querySelector('#dados-cpf').value = posts.cpf
     document.querySelector('#dados-nome').value = posts.nome
     document.querySelector('#dados-dataNascimento').value = posts.dataNascimento
     document.querySelector('#dados-email').value = posts.email
     document.querySelector('#dados-genero').value = posts.genero
     document.querySelector('#dados-nacionalidade').value = posts.nacionalidade
     document.querySelector('#dados-naturalidade').value = posts.naturalidade
     document.querySelector('#dados-profissao').value = posts.profissao
     document.querySelector('#dados-escolaridade').value = posts.ensino
     document.querySelector('#dados-estadoCivil').value = posts.estadoCivil
     document.querySelector('#dados-mae').value = posts.mae
     document.querySelector('#dados-pai').value = posts.pai
     

     
 
     modalDadosPaciente.showModal()
    
    
     
 }
 
 
const cpfInput = document.getElementById('cpf')

cpfInput.addEventListener('input' ,  function(e) {
  let cpf = e.target.value
  cpf = cpf.replace(/\D/g, '')
  cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4'); // Formata o CPF com pontos e hífen
    e.target.value = cpf;
 
})

const cpfInputEdit = document.getElementById('edit-cpf')

cpfInputEdit.addEventListener('input' ,  function(e) {
  let cpf = e.target.value
  cpf = cpf.replace(/\D/g, '')
  cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4'); // Formata o CPF com pontos e hífen
    e.target.value = cpf;
 
})

