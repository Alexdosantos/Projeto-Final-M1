//AQUI É O MODAL DO BUTTON NOVO PACIENTE

const openModal = document.querySelector('.btn-cad')
const modal = document.querySelector('.modal-new-Paciente')
const closeModal = document.querySelector('.close-modal')

openModal.onclick = function() {
    modal.showModal()
    
}

closeModal.onclick = function() {
    modal.close()
}


//AQUI É O BUTTON DO EDITAR PACIENTE
const openEditPaciente = document.querySelector('#editar')
const modalEditPaciente = document.querySelector('#editar-pacientes')
const closeModalPaciente = document.querySelector('#close-modal-editPacientes')

openEditPaciente.onclick = function() {

    modalEditPaciente.showModal()
    
    
}

closeModalPaciente.onclick = function() {
    modalEditPaciente.close()
}


//AQUI É O BUTTON DO DADOS PACIENTE
const openDadosPaciente = document.querySelector('#agenda')
const modalDadosPaciente = document.querySelector('#dados-pacientes')
const closeDadosPaciente = document.querySelector('#close-modal-dadosPaciente')

openDadosPaciente.onclick = function() {

    modalDadosPaciente.showModal()
    console.log(openDadosPaciente )
    
    
}

closeDadosPaciente.onclick = function() {
    modalDadosPaciente.close()
    console.log(closeModalPaciente )
}




  
