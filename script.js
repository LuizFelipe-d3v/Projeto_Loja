const prevButton = document.getElementById('voltar')
const nexButton = document.getElementById('avancar')
const items = document.querySelectorAll('.item')
const botoes = document.querySelectorAll('.ponto')
const numIndicator = document.querySelector('numeros')
const lista = document.querySelector('lista')

let ativo = 0;
const total = items.length;
let timer;

prevButton.addEventListener('click', function() {
    update()
})