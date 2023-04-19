const parametrosUrl = window.location.search
const paramentros = new URLSearchParams(parametrosUrl)
const id = paramentros.get('id')

console.log(id)