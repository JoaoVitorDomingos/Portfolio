import infoModais from "./info_modais.js";

// Modal 
const modal = document.getElementById("modal_projeto")

if(modal) {
    modal.addEventListener("show.bs.modal", evento => {
        // Botão que ativou o modal
        const btn = evento.relatedTarget

        // Reconhercer qual botão ativou 
        const nomeBtn = btn.getAttribute('data-bs-whatever')
        // console.log("Nome Btn: " + nomeBtn)

        // Pegar informações do modal
        let info = infoModais.find(elemento => elemento.titulo == nomeBtn)

        // console.log("Info: ")
        // console.log(info)

        // Atualizar Modal
        const caminho = "#projetos>.container_janelas>.modal>.modal-dialog>.modal-content"

        const img = document.querySelector(`${caminho}>.modal-body>.projeto_img`)
        const titulo = document.querySelector(`${caminho}>.modal-body>.projeto_info>h1`)
        const divInfo = document.querySelector(`${caminho}>.modal-body>.projeto_info`)
        const p1 = document.querySelector(`${caminho}>.modal-body>.projeto_info>p`)
        const links = [...document.querySelectorAll(`${caminho}>.modal-footer>a`)]

        // console.log(img)
        // console.log(titulo)
        // console.log(divInfo)
        // console.log(p1)
        // console.log(links)

        let tamanho = window.innerWidth
        if(tamanho < 768) {
            // console.log("Celular")
            img.style.backgroundImage = `url("${info.imagemP}")`
        } else if(tamanho < 1024) {
            // console.log("Tablet")
            img.style.backgroundImage = `url("${info.imagemM}")`
        } else {
            // console.log("Notebook ou PC")
            img.style.backgroundImage = `url("${info.imagemG}")`
        }
        

        titulo.innerHTML = info.titulo

        // console.log(info.descricao)

        p1.innerHTML = info.descricao[0]
        let max = (info.descricao.length) - 1
        // console.log("Max: " + max)
        for(let i = 1; i <= max; i++) {
            let p = document.createElement("p")
            // console.log("I: " + i)
            // console.log("Texto: " + info.descricao[i])
            p.innerHTML = info.descricao[i]
            divInfo.appendChild(p)
        }

        links[0].setAttribute("href", info.linkProjeto)
        links[1].setAttribute("href", info.linkRepositorio)

        info.jaAberto = true
    })
}

if(modal) {
    modal.addEventListener("hide.bs.modal", evento => {
        // Deletar os Parágrafos Criados
        const divInfo = document.querySelector(`#projetos>.container_janelas>.modal>.modal-dialog>.modal-content>.modal-body>.projeto_info`)

        // console.log(divInfo)

        // console.log("Filhos: ")
        let filhos = divInfo.children
        // console.log(filhos)

        let qtd = divInfo.childElementCount
        // console.log("Qtd: " + qtd)

        for(let i = 2; i < qtd; i++) {
            // console.log("Filho Deletar: ")
            // console.log(filhos[2])
            divInfo.removeChild(filhos[2])
        }
    })
}
