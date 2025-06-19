
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

//<button class="btnCopiar" id="btnCopiar" onclick="copiarMail()">
//       <img src="img/icono-copiar2.png" title="Copiar Mail" alt="Copiar Mail">
//     </button>

function copiarEmail(){
  const email = "plsantoro18@gmail.com";
  navigator.clipboard.writeText(email)
  .then(() =>{
    const mensaje = document.getElementById("EmailCopiado");
    mensaje.style.display = "block";

    // Ocultar el mensaje deespues de 2 segundos
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 2000);
})
  .catch(err => {
    alert("Error al copiar mail: " + err)
  })
}
