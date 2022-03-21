


boton.addEventListener("dblclick", () => {
    console.log("Doble click");
})

boton.ondblclick = () => {
    console.log("Doble click"); 
}
// ---------------
let boton = document.getElementById("miBotoncito");


/*boton.addEventListener("mousemove", () => {
    console.log("Doble click");
})*/

boton.onmousemove = () => {
    console.log("Moviendo el raton"); 
}
// --------------
let inputNombre = document.getElementById("nombre"); //INPUT
const textoNombre = document.getElementById("textoNombre"); //P


inputNombre.addEventListener("keydown", () => {
   textoNombre.innerText = inputNombre.value;
});
// --------------
let inputNombre = document.getElementById("nombre"); //INPUT
const textoNombre = document.getElementById("textoNombre"); //P

let formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (evento) => {
    console.log("Enviando formulario");
    console.table(evento);
    evento.preventDefault();
});
// -------------
let inputNombre = document.getElementById("nombre"); //INPUT
let inputApellidos = document.getElementById("apellidos"); //INPUT apellidos

const textoNombre = document.getElementById("textoNombre"); //P


let formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log(`La persona se llama ${inputNombre.value} ${inputApellidos.value}`);
});
// -----------
for(let contador=0;contador<localStorage.length;contador++){
    let clave = localStorage.key(contador);
    let valor = localStorage.getItem(clave);
    console.log(clave + " " + valor);
}
// ------------