const parametrosUrl = window.location.search
const parametros = new URLSearchParams(parametrosUrl)
const id = parametros.get('id')

async function carregarDadosPaciente() {
    try {
        const api = await fetch(`http://localhost:3000/Cadastro-Pacientes/${id}`)
        const paciente = await api.json()

        const nome = paciente.nome
        const dataNasc = paciente.dataNascimento
        const profissao = paciente.profissao
        const ensino = paciente.ensino

        document.getElementById('nome-idPaciente').innerHTML = nome
        document.getElementById('nasc-idPaciente').innerHTML = dataNasc
        document.getElementById('profissao-idPaciente').innerHTML = profissao
        document.getElementById('ensino-idPaciente').innerHTML = ensino
        
    } catch (error) {
        console.log(error)
    }    
}

carregarDadosPaciente()
