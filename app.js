// Mostrar tecnologías ocultas
document.getElementById("verMasTS").addEventListener("click", function () {
  const tecnologiasOcultas = document.querySelectorAll(".tecnologiasOcultas");
  tecnologiasOcultas.forEach(el => el.classList.remove("d-none"));
  
  document.getElementById("verMasTS").classList.add("d-none");
  document.getElementById("verMenosTS").classList.remove("d-none");
});

// Ocultar tecnologías ocultas
document.getElementById("verMenosTS").addEventListener("click", function () {
  const tecnologiasOcultas = document.querySelectorAll(".tecnologiasOcultas");
  tecnologiasOcultas.forEach(el => el.classList.add("d-none"));

  document.getElementById("verMasTS").classList.remove("d-none");
  document.getElementById("verMenosTS").classList.add("d-none");
});
