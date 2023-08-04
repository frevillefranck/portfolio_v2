//SLIDER
const slide = [
  {
    nom: 'Projet Carapuce',
    image: '../images/carapuce.png',
  },
  {
    nom: 'Projet Salamèche',
    image: '../images/salameche.png',
  },
  {
    nom: 'Projet Bulbizarre',
    image: '../images/bulbizarre.png',
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
  document.getElementById('slide').src = slide[numero].image;
  document.getElementById('nom_projet').textContent = slide[numero].nom;
}
//BARRE COMPETENCES
// const section_graph = document.getElementById("section_graph");
// const barre_html = document.querySelector("#barre_html")
// const barre_css = document.querySelector("#barre_css")
// const barre_php = document.querySelector("#barre_php")
// const barre_js = document.querySelector("#barre_js")
// const barre_SQL = document.querySelector("#barre_SQL")

// export function AffichComp() {
//   barre_html.style.width = "70%";
//   barre_css.style.width = "60%";
//   barre_php.style.width = "60%";
//   barre_js.style.width = "50%";
//   barre_SQL.style.width = "30%";
// };