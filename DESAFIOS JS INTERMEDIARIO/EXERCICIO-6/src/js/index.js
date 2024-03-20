const perguntas = document.querySelectorAll(".item");

perguntas.forEach(function (item) {
  item.addEventListener("click", function () {
    const itemAtivo = document.querySelector(".ativo");

    if (itemAtivo && itemAtivo !== item) {
      itemAtivo.classList.remove("ativo");
    }

    if (item.classList.contains("ativo")) {
      item.classList.remove("ativo");
    } else {
      item.classList.add("ativo");
    }
  });
});
