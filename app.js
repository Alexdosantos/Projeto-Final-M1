const openModal = document.querySelector('#btn-cad')
const modal = document.querySelector('#modal-new-Paciente')
const closeModal = document.querySelector('#close-modal')

openModal.onclick = function() {
    modal.showModal()
    
}

closeModal.onclick = function() {
    modal.close()
}