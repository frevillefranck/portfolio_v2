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
