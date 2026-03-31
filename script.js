// declarações DOM
const unidades = document.querySelectorAll(".unidade")
const msg = document.getElementById("msg")

// declarações de estado de Jogo
let tabuleiro = [
    '', '', '',
    '', '', '',
    '', '', ''
]
let jogador = 'X'
let ganhador = 0

// funções

function verificarUnidade(uni1, uni2, uni3) {
    return uni1 === uni2 && uni2 === uni3 && uni1 != ""
    
}

function verificarJogo(uni) {    
    let numUni = Number(uni)
    let celula = document.querySelector(`[data-unidade="${uni}"]`)
    
    console.log(tabuleiro)

    // verfica o ganhador e trava a função
    if(ganhador == 1 || ganhador == 2) return;

    // verifica se a celula esta vazia, se estiver é preenchida, caso contrario não é preenchida.
    if(tabuleiro[numUni] == '') {
        tabuleiro[numUni] = jogador
        celula.textContent = jogador
    } else {
        return
    }
    
    if(
        verificarUnidade(tabuleiro[0], tabuleiro[1], tabuleiro[2]) == true ||
        verificarUnidade(tabuleiro[3], tabuleiro[4], tabuleiro[5]) == true || 
        verificarUnidade(tabuleiro[6], tabuleiro[7], tabuleiro[8]) == true ||
        verificarUnidade(tabuleiro[0], tabuleiro[3], tabuleiro[6]) == true ||
        verificarUnidade(tabuleiro[1], tabuleiro[4], tabuleiro[7]) == true ||
        verificarUnidade(tabuleiro[2], tabuleiro[5], tabuleiro[8]) == true ||
        verificarUnidade(tabuleiro[0], tabuleiro[4], tabuleiro[8]) == true ||
        verificarUnidade(tabuleiro[6], tabuleiro[4], tabuleiro[2]) == true
    ){
        msg.textContent = `jogador ${jogador} ganhou`
        ganhador = 1
        return
    } 

    if(tabuleiro.every(cel => cel != '')) {
        msg.textContent = 'Empate'
        ganhador = 2
        return
    }
    
    // muda de jogador cada vez que é preenchida alguma casa que esteja vazia.
    if(jogador == 'X') {
        jogador = 'O'
        msg.textContent = 'vez do O'
    } else {
        jogador = 'X'
        msg.textContent = 'vez do X'
    }
}

// sequencias de código

unidades.forEach((uni) => {
    uni.addEventListener("click", (uni) => {
        let celula = uni.target.dataset.unidade
        console.log(celula, typeof(celula))
        verificarJogo(celula)
    })
})
