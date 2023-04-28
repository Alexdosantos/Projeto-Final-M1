// obter o parâmetro "id" da URL
const parametrosUrl = window.location.search;
const parametros = new URLSearchParams(parametrosUrl);
const id = parametros.get('id');

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
          idPaciente: parseInt(id)
        })
      });
      const response = await api.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  document.querySelector('#btn-criarNovasessao').addEventListener('click', salveSessao);
  
// AQUI REALIZA O MÁTODO POST PARA SALVA OS DADOS EM FOTO RELEVANTE
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
          idPaciente: parseInt(id)
        })
      });
      const response = await api.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  document.querySelector('#btn-criarFatoRelevante').addEventListener('click', salveFatoRelenate);





const dadoSessao = async () =>  {
    const postSessao = document.querySelector('#cardsessaonew')
    const apiSessao = await fetch (`https://projeto-final-arnia.onrender.com/sessoesPaciente?idPaciente=${id}`)
    const newdados =  await apiSessao.json()
    let conteudo = ''
    

    newdados.forEach(news => {
        
        conteudo += `
        <section id="section-cardSessao">
        <img class="barraVerde" src="/assets/barra verde.svg" alt="">
            <div> 
                

                <div class="cardSessao">
                    <div class="corverde"></div>
                    
                    <img class="img1" src="/assets/logo sessão.svg" alt="">
                    
                        <h4>Sessão 01</h4>
                        <button id="opcoes"><img src="/assets/3 pontos.svg"alt=""></button>

                    
                    
                    <p class="date-sessao" id="date-sessao">${news.data}</p>
                    <p class="textInfo-sessao" id="textInfo-sessao">${news.resumo}</p>
                </div>
            </div>
            </section>

        
    `
        
    })
    postSessao.innerHTML = conteudo
    
    
}

window.addEventListener('DOMContentLoaded' , dadoSessao)


const dadosfatoRelevante = async () =>  {
   
    const postfato = document.querySelector('#section-fatoRelevante')
    const apifato = await fetch (`https://projeto-final-arnia.onrender.com/fatoRelevante?idPaciente=${id}`)
    const newfato =  await apifato.json()
    let conteudo = ''

    newfato.forEach(news => {
        conteudo += `<img class="retanguloAzul" src="/assets/Rectangle azul.svg" alt="">
        
                
                
        <div class="cardfatoRelevante">
            <img class="img-fatorelevante" src="/assets/logo fato relevante.svg" alt="">
            
            <h4>Fato Relevante</h4>
            <button id="opcoes1"><img src="/assets/3 pontos.svg"alt=""></button>
            
            
            <p class="dateFatorelevante">${news.data}</p>
            <p class="textInfo-FatoRelefante">${news.descricao}</p>
        </div>`
        
    })
    postfato.innerHTML = conteudo
    console.log(conteudo)
}

window.addEventListener('DOMContentLoaded' , dadosfatoRelevante)
  

function abrirSessaoValore(id) {
  window.location.href = `sessao.html?id=${id}`

}

