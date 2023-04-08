const openModalProntuario = document.querySelector('#sessao-pronturario')
const modalProntuario = document.querySelector('#modal-prontuario')
const closeProntuario = document.querySelector('#btn-closeModal-Prontuario')

openModalProntuario.onclick = function() {
    modalProntuario.showModal()
    
}

closeProntuario.onclick = function() {
    modalProntuario.close()
}

