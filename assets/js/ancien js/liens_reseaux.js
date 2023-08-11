const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");
github.style.cursor = "pointer"
linkedin.style.cursor = "pointer"
github.addEventListener("click", () => LiensGithub())
linkedin.addEventListener("click", () => LiensLinkedin())
function LiensGithub() {
    window.open("https://github.com/frevillefranck")
}
function LiensLinkedin() {
    window.open("https://www.linkedin.com/in/franck-fr%C3%A9ville-87039519b/")
}