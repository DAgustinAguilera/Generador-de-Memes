const botonTexto = document.getElementById ("botonTexto")
const botonImagen = document.getElementById ("botonImagen")
const panelTexto = document.getElementById ("panelTexto")
const panelEfectos = document.getElementById ("panelEfectos")
const textoSuperior = document.getElementById ("textoSuperior")
const textoArriba = document.getElementById ("textoArriba")
const textoInferior = document.getElementById ("textoInferior")
const textoAbajo = document.getElementById ("textoAbajo")
const SacarTextoInferior = document.getElementById ("SacarTextoInferior")
const SacarTextoSuperior = document.getElementById ("SacarTextoSuperior")
const selectorFuente = document.getElementById ("selectorFuente")
const tamañoFuente = document.getElementById ("tamañoFuente")
const colorFuente = document.getElementById ("colorFuente")
const colorFondo = document.getElementById ("colorFondo")
const sacarFondoTexto = document.getElementById ("sacarFondoTexto")


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
textoSuperior.addEventListener("input",() =>{
  textoArriba.innerHTML = `<h2>${textoSuperior.value}</h2>`
})
textoInferior.addEventListener("input",() =>{
  textoAbajo.innerHTML = `<h2>${textoInferior.value}</h2>`
})
SacarTextoInferior.addEventListener("click",() =>{
  textoAbajo.classList.toggle("textoAbajoNone");
})
SacarTextoSuperior.addEventListener("click",() =>{
  textoArriba.classList.toggle("textoArribaNone");
})
selectorFuente.addEventListener("change",() =>{
  textoArriba.style.fontFamily = `${selectorFuente.value}`;
  textoAbajo.style.fontFamily = `${selectorFuente.value}`;
})
tamañoFuente.addEventListener("input",() =>{
  textoArriba.style.fontSize = `${tamañoFuente.value}px`;
  textoAbajo.style.fontSize = `${tamañoFuente.value}px`;
})
colorFuente.addEventListener("input",() =>{
  textoArriba.style.color = `${colorFuente.value}`;
  textoAbajo.style.color = `${colorFuente.value}`;
})
colorFondo.addEventListener("input",() =>{
  textoArriba.style.backgroundColor = `${colorFondo.value}`;
  textoAbajo.style.backgroundColor = `${colorFondo.value}`;
})
sacarFondoTexto.addEventListener("change",() =>{
  if (sacarFondoTexto.checked){
    textoAbajo.style.backgroundColor = "transparent"
    textoArriba.style.backgroundColor = "transparent"
  }else{
    textoArriba.style.backgroundColor = `${colorFondo.value}`;
    textoAbajo.style.backgroundColor = `${colorFondo.value}`;
  }
})





