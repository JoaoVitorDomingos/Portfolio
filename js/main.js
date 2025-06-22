const menu = document.querySelector("#menu")
let larguraTela = window.innerWidth

if(larguraTela >= 768) {
    menu.classList.remove("offcanvas-top")
    menu.classList.add("offcanvas-end")
}