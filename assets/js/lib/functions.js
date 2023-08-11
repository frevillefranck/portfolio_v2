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
//BARRE COMPETENCES
export function OuvrirPage() {
  window.open("/images/CV.png");
}

export function AffichComp() {
  const barre_html = document.querySelector("#barre_html");
  const barre_css = document.querySelector("#barre_css");
  const barre_php = document.querySelector("#barre_php");
  const barre_js = document.querySelector("#barre_js");
  const barre_SQL = document.querySelector("#barre_SQL");
  barre_html.style.width = "70%";
  barre_css.style.width = "60%";
  barre_php.style.width = "60%";
  barre_js.style.width = "50%";
  barre_SQL.style.width = "30%";
}
//AFFICHAGE DES LIENS RESEAUX
export function AffichLiens() {
  const div_liens = document.getElementById("div_liens");
  div_liens.classList.toggle("click");
}
