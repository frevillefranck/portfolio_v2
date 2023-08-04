const div_liens = document.getElementById("div_liens");
const div_linkedin = document.getElementById("div_linkedin");
const div_github = document.getElementById("div_github");
div_liens.style.cursor = "pointer";
div_liens.addEventListener("click", () => {

    div_github.style.translate = "40px 4rem";
    div_linkedin.style.translate = "40px -4rem";
    div_linkedin.style.transition = "1s";
    div_liens.style.background = "url(../images/cancel_5392784.png)";
    div_liens.style.backgroundRepeat = "no-repeat";
    div_liens.style.backgroundSize = "cover"
    div_liens.style.backgroundPosition = "center"


});