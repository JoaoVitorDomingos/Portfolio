// const body = document.querySelector("body")
// const fade = document.querySelector(".fade")
// let btnFecharModal = document.querySelectorAll(".fechar_modal")
// let btnAbrirModal = document.querySelectorAll(".abrir_modal")
// let modais = document.querySelectorAll(".janela")

// let regexModal = /m[1-9]/

// // console.log(body)
// // console.log(fade)
// // console.log(btnFecharModal)
// // console.log(btnAbrirModal)

// function FecharModal(evento) {
//     //console.log(evento)
//     if(evento.key === "Escape") {
//         modais.forEach(el => el.classList.add("hide"))
//         fade.classList.add("hide")
//         body.classList.remove("no-scroll")
//         body.removeEventListener("keyup", FecharModal)
//     } 
// }

// btnAbrirModal.forEach(btn => {
//     btn.addEventListener("click", (evt) => {
//         //console.log("Este foi o botão clicado:")
//         //console.log(evt.target)
//         let classes = evt.target.classList
//         //console.log("Suas Classes")
//         //console.log(classes)


//         let i = 0
//         classes.forEach((classe, index) => {
//             if (regexModal.test(classe)) {
//                 //console.log(regexModal.test(classe))
//                 i = index
//                 //console.log(i)
//             }
//         })

//         let modal = document.querySelector(`#${classes[i]}`)
//         //console.log(modal)

//         modal.classList.toggle("hide")
//         fade.classList.toggle("hide")
//         body.classList.add("no-scroll")

//         body.addEventListener("keyup", FecharModal)
//     })
// })

// btnFecharModal.forEach(btn => {
//     btn.addEventListener("click", ()=> {
//         modais.forEach(el => {
//             el.classList.add("hide")
//             fade.classList.add("hide")
//             body.classList.remove("no-scroll")
//         })

//         body.removeEventListener("keyup", FecharModal)
//     })
// })


import infoModais from "./info_modais.js";

// Modal 
const modal = document.getElementById("modal_projeto")

if(modal) {
    modal.addEventListener("show.bs.modal", evento => {
        // Botão que ativou o modal
        const btn = evento.relatedTarget

        // Reconhercer qual botão ativou 
        const nomeBtn = btn.getAttribute('data-bs-whatever')
        console.log("Nome Btn: " + nomeBtn)

        // Pegar informações do modal
        let info = infoModais.find(elemento => elemento.titulo == nomeBtn)

        console.log("Info: ")
        console.log(info)

        // Atualizar Modal
        const caminho = "#projetos>.container_janelas>.modal>.modal-dialog>.modal-content"

        const img = document.querySelector(`${caminho}>.modal-body>.projeto_img`)
        const titulo = document.querySelector(`${caminho}>.modal-body>.projeto_info>h1`)
        const divInfo = document.querySelector(`${caminho}>.modal-body>.projeto_info`)
        const p1 = document.querySelector(`${caminho}>.modal-body>.projeto_info>p`)
        const links = [...document.querySelectorAll(`${caminho}>.modal-footer>a`)]

        console.log(img)
        console.log(titulo)
        console.log(divInfo)
        console.log(p1)
        console.log(links)

        img.style.backgroundImage = `url("${info.imagem}")`

        titulo.innerHTML = info.titulo

        console.log(info.descricao)
        p1.innerHTML = info.descricao[0]
        let max = (info.descricao.length) - 1
        let p = document.createElement("p")
        for(let i = 1; i <= max; i++) {
            p.innerHTML = info.descricao[i]
            divInfo.appendChild(p)
        }

        links[0].setAttribute("href", info.linkProjeto)
        links[1].setAttribute("href", info.linkRepositorio)
    })
}
