// obter o parâmetro "id" da URL
const parametrosUrl = window.location.search;
const parametros = new URLSearchParams(parametrosUrl);
const id = parametros.get('id');

// carregar dados do paciente com o ID especificado
async function carregarDadosPaciente() {
  try {
    const api = await fetch(`https://projeto-final-arnia.onrender.com/cadastro-pacientes/${id}`);
    if (api.status === 404) {
      console.log('Paciente não encontrado');
      return;
    }
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
  } catch (erro) {
    console.log(erro);
  }
}

carregarDadosPaciente();

// realizar o método POST para salvar os dados da sessão
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
        idPaciente: parseInt(id)
      })
    });
    const resposta = await api.json();
    console.log(resposta);
  } catch (erro) {
    console.log(erro);
  }
  // window.location.href = `prontuario.html?id=${id}`;
};

document.querySelector('#btn-criarNovasessao').addEventListener('click', salveSessao);

// realizar o método POST para salvar os dados em fato relevante
const salveFatoRelevante = async () => {
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
        idPaciente: parseInt(id)
      })
    });
    const resposta = await api.json();
    console.log(resposta);
  } catch (erro) {
    console.log(erro);
  }
  // window.location.href = `prontuario.html?id=${id}`;
};

document.querySelector('#btn-criarFatoRelevante').addEventListener('click' , salveFatoRelevante)
