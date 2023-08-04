import { ChangeSlide } from "./lib/functions.js";
let precedent = document.querySelector("#precedent");
precedent.addEventListener("click", () => ChangeSlide(-1));
let suivant = document.querySelector("#suivant");
suivant.addEventListener("click", () => ChangeSlide(1));
