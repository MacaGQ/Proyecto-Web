//Animacion Inicial

function animacion() {
    document.querySelector("#tituloPagina img").style.transition = "2s ease-in-out";
    document.querySelector("#tituloPagina img").style.transform = "rotate(720deg)";
}

//Menu Hamburguesa

function desplegarMenu() {
    let x = document.querySelector("nav ul").style;
    if (x.transform === "translateX(0%)") {
        x.transform = "translateX(120%)";
        x.transition = "0.5s ease-in"
    } else {
        x.transform = "translateX(0%)";
        x.transition = "0.5s ease-in"
    }
}
