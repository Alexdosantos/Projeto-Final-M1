const openModal = document.querySelector('.btn-cad')
const modal = document.querySelector('.modal-new-Paciente')
const closeModal = document.querySelector('.close-modal')
const cancelarModalPaciente = document.querySelector('#cancelar-newPaciente')



function abriModal () {
    modal.showModal()
}

openModal.onclick = function() {
    modal.showModal()
    
}

closeModal.onclick = fecharModalPaciente;
cancelarModalPaciente.onclick = fecharModalPaciente;

 function fecharModalPaciente () {
    modal.close()
    console.log(fecharModalPaciente)
 }




//AQUI É O BUTTON DO EDITAR PACIENTE
const openEditPaciente = document.querySelector('#editar')
const modalEditPaciente = document.querySelector('#editar-pacientes')
const closeModalPaciente = document.querySelector('#close-modal-editPacientes')
const cancelaEditPaciente = document.querySelector('#cancelarEditPacientes')




openEditPaciente.onclick = function() {

    modalEditPaciente.showModal()
    
}
function fecharModalEdit () {
    modalEditPaciente.close()
    console.log(fecharModalEdit)
}

closeModalPaciente.onclick = fecharModalEdit;
cancelaEditPaciente.onclick = fecharModalEdit;




//AQUI É O BUTTON DO DADOS PACIENTE
const openDadosPaciente = document.querySelector('#agenda')
const modalDadosPaciente = document.querySelector('#dados-pacientes')
const closeDadosPaciente = document.querySelector('#close-modal-dadosPaciente')
const editBlue = document.querySelector('#editBlue')




openDadosPaciente.onclick = function() {

    modalDadosPaciente.showModal()
    console.log(openDadosPaciente )
    
    
}

editBlue.onclick = function() {

  modalEditPaciente.showModal()
  console.log(openDadosPaciente )
  
  
}


closeDadosPaciente.onclick = function() {

    modalDadosPaciente.close()
    console.log(openDadosPaciente )
    
    
}


const openModalSair = document.querySelector('#btn-sairPacientes')
const modalSair = document.querySelector('#modal-sairPagina')
const modalFechar = document.querySelector('#btn-fecharSair')

openModalSair.onclick = function () {
  if(modalSair.style.display === "none") {
    modalSair.style.display = 'flex'
  } else {
    modalSair.style.display = 'none'
 }
};
function fecharAgora() {
  modalSair.style.display = 'none'
};
modalFechar.onclick = fecharAgora




  
  
  
  


  
