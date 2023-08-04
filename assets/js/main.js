//SLIDER
import { ChangeSlide } from "./lib/functions.js";
let precedent = document.querySelector("#precedent");
precedent.addEventListener("click", () => ChangeSlide(-1));
let suivant = document.querySelector("#suivant");
suivant.addEventListener("click", () => ChangeSlide(1));

//BARRE COMPETENCES
// import { AffichComp } from "./lib/functions.js";
// const section_graph = document.getElementById("section_graph");
// section_graph.addEventListener("click", () => AffichComp());