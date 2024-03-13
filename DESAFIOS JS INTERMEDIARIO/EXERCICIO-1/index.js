// OBTIVE A RESPOSTA MAS A RESOLUÇÃO DOS MENTORES ESTA DIFERENTE;

//     Dica da resolução: Começar pensando no objetivo do que precisa fazer e no passo a passo pra chegar lá é essencial.

//     NÂO SAIA TENTANDO ESCREVER CÓDIGO! Antes disso você precisa saber O QUE precisa ser feito e só depois COMO fazer.

//     Objetivo do exercício: ao clicar no botão o fundo do quadrado azul deve trocar para a cor amarela

//         Passo 1 - Pegar o elemento do botão aqui no JS

//         Passo 2 - Pegar o elemento do quadrado azul aqui no JS

//         Passo 3 - Quando o usuário clicar no botão precisamos disparar a ação de mudar a cor do fundo do quadrado azul

//         Passo 4 - Para mudar a cor de fundo podemos adicionar e remover as classes que o elemento tem

const trocarCor = document.getElementById("trocarCor");
const quadradoAzul = document.querySelector(".quadrado-azul");
trocarCor.addEventListener("click", function () {
  quadradoAzul.style.backgroundColor = "yellow";
});
