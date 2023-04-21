
const parametrosUrl = window.location.search
const paramentros = new URLSearchParams(parametrosUrl)
const id = paramentros.get('id')

console.log(id)


const BtnFiltraTodos = document.querySelector('#btn-Filtrar')
const miniModal = document.querySelector('#mini-cardFiltro')

BtnFiltraTodos.onclick = function () {
    if(miniModal.style.display === 'none') {
        miniModal.style.display = 'flex'
    }else {
        miniModal.style.display = 'none'
    }
}
