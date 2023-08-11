const div_liens = document.getElementById("div_liens");
const bouton = document.getElementById("bouton");
div_liens.style.cursor = "pointer";
bouton.addEventListener("click", (AffichLiens) => {
  div_liens.classList.toggle("click");
});
