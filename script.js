const prevButton = document.getElementById('voltar')
const nextButton = document.getElementById('avancar')
const items = document.querySelectorAll('.item')
const botoes = document.querySelectorAll('.ponto')
const numIndicator = document.querySelector('.numeros')
const lista = document.querySelector('lista')

let ativo = 0;
const total = items.length;
let timer;

function update(direction) {

    document.querySelector('.item.ativo').classList.remove('ativo')
    document.querySelector('.ponto.ativo').classList.remove('ativo')

    if(direction > 0){
        ativo = ativo + 1

        if(ativo === total){
            ativo = 0
        }
    } 
    
    else if(direction < 0){
        ativo = ativo - 1
        
        if(ativo < 0){
            ativo = total - 1
        }
    }

    items[ativo].classList.add('ativo')
    botoes[ativo].classList.add('ativo')

    numIndicator.textContent = String(ativo + 1).padStart(2, '0')
}

clearInterval(timer)
timer = setInterval(() => {
        update(1)
    }, 5000);


prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(1)
})