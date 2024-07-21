const body = document.querySelector("body")
const fade = document.querySelector(".fade")
let btnFecharModal = document.querySelectorAll(".fechar_modal")
let btnAbrirModal = document.querySelectorAll(".abrir_modal")
let modais = document.querySelectorAll(".janela")

let regexModal = /m[1-9]/

// console.log(body)
// console.log(fade)
// console.log(btnFecharModal)
// console.log(btnAbrirModal)

function FecharModal(evento) {
    //console.log(evento)
    if(evento.key === "Escape") {
        modais.forEach(el => el.classList.add("hide"))
        fade.classList.add("hide")
        body.classList.remove("no-scroll")
        body.removeEventListener("keyup", FecharModal)
    } 
}

btnAbrirModal.forEach(btn => {
    btn.addEventListener("click", (evt) => {
        //console.log("Este foi o botão clicado:")
        //console.log(evt.target)
        let classes = evt.target.classList
        //console.log("Suas Classes")
        //console.log(classes)


        let i = 0
        classes.forEach((classe, index) => {
            if (regexModal.test(classe)) {
                //console.log(regexModal.test(classe))
                i = index
                //console.log(i)
            }
        })

        let modal = document.querySelector(`#${classes[i]}`)
        //console.log(modal)

        modal.classList.toggle("hide")
        fade.classList.toggle("hide")
        body.classList.add("no-scroll")

        body.addEventListener("keyup", FecharModal)
    })
})

btnFecharModal.forEach(btn => {
    btn.addEventListener("click", ()=> {
        modais.forEach(el => {
            el.classList.add("hide")
            fade.classList.add("hide")
            body.classList.remove("no-scroll")
        })

        body.removeEventListener("keyup", FecharModal)
    })
})