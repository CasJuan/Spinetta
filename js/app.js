let animado = document.querySelectorAll(".sectionAnimada");

function mostrarContet () {
    let scrollTop = document.documentElement.scrollTop;

    for (let i = 0; i < animado.length; i++) {
        let alturaAnimada = animado[i].offsetTop;

        if(alturaAnimada - 400 < scrollTop){
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', mostrarContet);