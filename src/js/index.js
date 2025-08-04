const botoes = document.querySelectorAll(".fixo");
const informacoes = document.getElementsByClassName("texto");
const setas = document.getElementsByClassName("seta");

informacoes.forEach(function(item) {
    item.addclassListener("click", function () {
        const itemAtivoAtual =document.querySelector(".ativo");

        itemAtivoAtual.classList.remove("ativo");
        item.classList.add("ativo");


    });
});