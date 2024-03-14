const quadradoPreto = document.querySelector(".quadradoPreto");
quadradoPreto.addEventListener("click", () => {
  const classeAzulExiste = quadradoPreto.classList.contains("quadradoAzul");

  if (classeAzulExiste) {
    quadradoPreto.classList.remove("quadradoAzul");
  } else {
    quadradoPreto.classList.add("quadradoAzul");
  }
});
