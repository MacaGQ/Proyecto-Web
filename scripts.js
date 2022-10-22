//Animacion Inicial

function animacion() {
    document.querySelector("#tituloPagina img").style.transition = "2s ease-in-out";
    document.querySelector("#tituloPagina img").style.transform = "rotate(720deg)";
}

//Menu Hamburguesa

function desplegarMenu() {
    let x = document.querySelector("nav ul").style;
    if (x.transform === "translateX(120%)") {
        x.transform = "translateX(0)";
        x.transition = "0.5s ease-in"
    } else {
        x.transform = "translateX(120%)";
        x.transition = "0.5s ease-in"
    }
}



const miAplicacion = Vue.createApp({
  data() {
      return { HTML_a_mostrar }
  },

  methods: {

      traerDatosAPI() {
          fetch('https://jsonplaceholder.typicode.com/posts/1/comments') // API a leer
              // Cuando ha finalizado la lectura
              // guardo en datos el texto leido:
              .then(datos => datos.json()) //res guarda el dato mediante el método .json()
              .then(datos => {
                  this.HTML_a_mostrar +=
                      `<div class="COMENTARIO">
               Nombre: ${datos.results[0].name}, ${datos.results[0]}<br>
               Correo: ${datos.results[0].login.username}<br>
               Comentario: ${datos.results[0].body}<br>
              </div>`
              })
      }
  }

}).mount("#app")