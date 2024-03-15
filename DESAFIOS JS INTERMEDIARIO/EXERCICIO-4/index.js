document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".inputSelecionado");

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      if (input.value !== "") {
        input.classList.add("inputPreenchido");
      } else {
        input.classList.remove("inputPreenchido");
      }
    });
  });
});
