


// obter o parâmetro "id" da URL
const parametrosUrl = window.location.search;
const parametros = new URLSearchParams(parametrosUrl);
const id = parametros.get('id');

// carregar dados do paciente com o ID especificado
async function carregarDadosPaciente() {
  try {
    const api = await fetch(`http://localhost:3000/cadastro-pacientes/${id}`);
    const paciente = await api.json();

    const nome = paciente.nome;
    const dataNasc = paciente.dataNascimento;
    const profissao = paciente.profissao;
    const ensino = paciente.ensino;

    // preencher os campos da página com os dados do paciente
    document.getElementById('nome-idPaciente').innerHTML = nome;
    document.getElementById('nasc-idPaciente').innerHTML = dataNasc;
    document.getElementById('profissao-idPaciente').innerHTML = profissao;
    document.getElementById('ensino-idPaciente').innerHTML = ensino;
  } catch (error) {
    console.log(error);
  }    
}

carregarDadosPaciente();

const salveSessao = async () => {
    
      const data= document.querySelector('#data-newSessao').value
      const HoraIncio = document.querySelector('#time-InicioSessao').value
      const HoraFinal = document.querySelector('#time-FimSessao').value
      const titulo = document.querySelector('#titulo-input').value
      const resumo= document.querySelector('#tituloTextModal').value
      
   
      const sessao = {
          
         data,
         HoraIncio,
         HoraFinal,
         titulo,
         resumo,
     }
   
   
     await cadastro(sessao)
   
   }
   
  document.querySelector('#btn-criarNovasessao').addEventListener('click', salveSessao )