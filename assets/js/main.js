//SLIDER
import {
  AffichComp,
  OuvrirPage,
  ChangeSlide,
  AffichLiens,
} from "./lib/functions.js";
let precedent = document.querySelector("#precedent");
precedent?.addEventListener("click", () => ChangeSlide(-1));
let suivant = document.querySelector("#suivant");
suivant?.addEventListener("click", () => ChangeSlide(1));

//BARRE COMPETENCES
const section_graph = document.getElementById("section_graph");
section_graph?.addEventListener("click", () => AffichComp());

const div_CV = document.querySelector("#div_CV");
div_CV?.addEventListener("click", () => OuvrirPage());

//AFFICHAGE DES LIENS RESEAUX
const bouton = document.getElementById("bouton");
bouton.addEventListener("click", () => AffichLiens());
