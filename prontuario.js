const parametrosUrl = window.location.search;
const parametros = new URLSearchParams(parametrosUrl);
const id = parametros.get('id');

if (!id) {
  console.error('ID não encontrado na URL');
}

// carregar dados do paciente com o ID especificado
async function carregarDadosPaciente() {
  try {
    const api = await fetch(`https://projeto-final-arnia.onrender.com/cadastro-pacientes/${id}`);
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


let pacienteId = id; // armazenar o ID em uma variável


//  AQUI REALIZA O MÉTODO DE POST PARA SALVAR OS DADOS DA SESSÃO
const salveSessao = async () => {
    try {
      const api = await fetch('https://projeto-final-arnia.onrender.com/sessoesPaciente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: document.querySelector('#data-newSessao').value,
          horaInicio: document.querySelector('#time-InicioSessao').value,
          horaFinal: document.querySelector('#time-FimSessao').value,
          titulo: document.querySelector('#titulo-input').value,
          resumo: document.querySelector('#tituloTextModal').value,
          idPaciente: parseInt(pacienteId) // usar a variável para enviar o ID
        })
      });
      const response = await api.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  document.querySelector('#btn-criarNovasessao').addEventListener('click', salveSessao);
  
// AQUI REALIZA O MÉTODO POST PARA SALVAR OS DADOS EM FATO RELEVANTE
  const salveFatoRelenate = async () => {
    try {
      const api = await fetch('https://projeto-final-arnia.onrender.com/fatoRelevante', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: document.querySelector('#dataFato').value,
          titulo: document.querySelector('#tituloFato').value,
          descricao: document.querySelector('#tituloFatoModal').value,
          idPaciente: parseInt(pacienteId) // usar a variável para enviar o ID
        })
      });
      const response = await api.json();
      console.log(response);
    } catch {

    }
  }