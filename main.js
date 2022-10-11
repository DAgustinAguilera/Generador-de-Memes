const botonTexto = document.getElementById ("botonTexto")
const botonImagen = document.getElementById ("botonImagen")
const panelTexto = document.getElementById ("panelTexto")
const panelEfectos = document.getElementById ("panelEfectos")

botonTexto.addEventListener("click", () =>{
  panelTexto.classList.add("panelTexto");
  panelTexto.classList.remove("panelTextoNone");
  panelEfectos.classList.remove("panelEfectos");
  panelEfectos.classList.add("panelEfectosNone");
  
})
botonImagen.addEventListener("click", () =>{
  panelTexto.classList.remove("panelTexto");
  panelTexto.classList.add("panelTextoNone");
  panelEfectos.classList.add("panelEfectos");
  panelEfectos.classList.remove("panelEfectosNone");
  
})