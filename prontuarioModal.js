const openModalProntuario = document.querySelector('#sessao-pronturario')
const modalProntuario = document.querySelector('#modal-prontuario')
const closeProntuario = document.querySelector('#btn-closeModal-Prontuario')
const cancelarProntuario = document.querySelector('#btn-criarNovasessao')

openModalProntuario.onclick = function() {
    modalProntuario.showModal()
    
}

closeProntuario.onclick = fecharModal;
cancelarProntuario.onclick = fecharModal;

function fecharModal() {
    modalProntuario.close();
}



const openModalfatoRelevante = document.querySelector('#btn-fatoRelevante')
const modalfatoRelevante = document.querySelector('#modalNovoRelevante')
const closefatoRelevante = document.querySelector('#btn-closeModalFato')
const cancelarfatoRelevante = document.querySelector('#btn-cancelarFato')

openModalfatoRelevante.onclick = function() {
    modalfatoRelevante.showModal()
    
}

closefatoRelevante.onclick = fecharModalFato;
cancelarfatoRelevante.onclick = fecharModalFato;

function fecharModalFato() {
    modalfatoRelevante.close();
    
}



  
