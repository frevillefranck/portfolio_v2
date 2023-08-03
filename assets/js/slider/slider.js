const slide = [
  '../images/carapuce.png',
  '../images/salameche.png',
  '../images/bulbizarre.png',
];
let numero = 0;
function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) {
    numero = slide.length - 1;
  }
  if (numero > slide.length - 1) {
    numero = 0;
  }
  document.getElementById('slide').src = slide[numero];
}
