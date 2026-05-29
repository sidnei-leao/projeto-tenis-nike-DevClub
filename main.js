let body = document.querySelector("body");
let tenis = document.querySelector(".tenis");
let botaoCarrinho = document.querySelector(".botao-carrinho");
let nike = document.getElementById("nike");
let root = document.documentElement;

function mudarVisual(cor, imagem) {

    body.style.background = cor

    tenis.src = imagem

    botaoCarrinho.style.background = cor

    nike.style.color = cor 

    root.style.setProperty("--cor-neon", cor);
}


