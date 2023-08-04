const div_CV = document.querySelector("#div_CV");
div_CV.addEventListener("click", () => OuvrirPage());

function OuvrirPage() {
    window.open("/images/CV.png")
}



const section_graph = document.getElementById("section_graph");
const barre_html = document.querySelector("#barre_html")
const barre_css = document.querySelector("#barre_css")
const barre_php = document.querySelector("#barre_php")
const barre_js = document.querySelector("#barre_js")
const barre_SQL = document.querySelector("#barre_SQL")
section_graph.addEventListener("click", () => AffichComp());

function AffichComp() {
    barre_html.style.width = "70%";
    barre_css.style.width = "60%";
    barre_php.style.width = "60%";
    barre_js.style.width = "50%";
    barre_SQL.style.width = "30%";
};