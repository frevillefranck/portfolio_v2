//SLIDER
const slide = [
  {
    nom: "Mon Portfolio",
    image: "../images/portfolio.png",
  },
  {
    nom: "API jeux vidéos",
    image: "../images/API_GAMING.png",
  },
  {
    nom: "Jeu clicker",
    image: "../images/clicker.png",
  },
];
let numero = 0;
export function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) {
    numero = slide.length - 1;
  }
  if (numero > slide.length - 1) {
    numero = 0;
  }
  document.getElementById("slide").src = slide[numero].image;
  document.getElementById("nom_projet").textContent = slide[numero].nom;
}
//CV
export function OuvrirPage() {
  window.open("/images/CV.png");
}

//AFFICHAGE DES LIENS RESEAUX
export function AffichLiens() {
  const div_github = document.getElementById("div_github")
  const div_linkedin = document.getElementById("div_linkedin")
  const div_liens = document.getElementById("div_liens");
  div_github.style.transition = "1s";
  div_linkedin.style.transition = "1s";
  div_liens.classList.toggle("click");
}
