const botoes = document.getElementsByClassName("fixo");
const informacoes = document.getElementsByClassName("texto");
const setas = document.getElementsByClassName("seta");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", () => {
        const mudar = informacoes[i].classList.contains("desaparece");

        mudarSeta(i, mudar);

        if(mudar){
            informacoes[i].classList.remove("desaparece");
            informacoes[i].classList.add("apareceu");
        } else {
            informacoes[i].classList.remove("apareceu");
            informacoes[i].classList.add("desaparece");
        }
});
}

function mudarSeta(i, mudando) {
    if (mudando) {
        setas[i].classList.remove("cinza");
        setas[i].classList.add("setaLaranja");
    } else {
        setas[i].classList.remove("setaLaranja");
        setas[i].classList.add("cinza");
    }
}