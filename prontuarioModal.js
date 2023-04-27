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


const BtnFiltraTodos = document.querySelector('#btn-Filtrar')
const miniModal = document.querySelector('#mini-cardFiltro')

BtnFiltraTodos.onclick = function () {
    if(miniModal.style.display === 'none') {
        miniModal.style.display = 'flex'
    }else {
        miniModal.style.display = 'none'
    }
}
  


const openModalSair = document.querySelector('#btn-sairProntuario')
const modalSair = document.querySelector('#modal-sairPagina')


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
