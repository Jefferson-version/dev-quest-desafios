document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".inputSelecionado");

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      if (input.value !== "") {
        input.style.borderColor = "green";
        input.style.borderWidth = "5px";
      } else {
        input.style.borderColor = "";
      }
    });
  });
});
