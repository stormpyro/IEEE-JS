/* Variables */

let nueva_variable = "Nueva variable";
const nueva_variable3 = true;

let variable_null = null;
let variable_undefined;

console.log(variable_null);
console.log(typeof nueva_variable);
console.log(typeof nueva_variable2);
console.log(typeof nueva_variable3);

/* Tipos de datos */
/*  Number 
    String
    Bool
    array
    objetos
    null o undefined
*/
/* Para saber el tipo de dato usar typeof nombre_variable */
let nombre = "Renatto";
let funcion = () => {
	let nombre = "IEEE";
	console.log("Nombre en la funcion: " + nombre);
};

funcion();
console.log("Nombre fuera de la funcion: " + nombre);

console.log(window.outerHeight);

/* Condicionales */
/* if(condicion){
    codigo cuando es true
}else{
    codigo cuando es false
} */
console.log("###################### CONDICIONALES ##############");
let edad = 40;
let alumno = "UNFV";
/* Operadores
    < Menor
    > Mayor
    >= mayor o igual
    <= menor o igual
    == igual
    === valor sea el mismo y que el tipo de dato sea el mismo 
    Operadores logicos
    && and -> condicion1 && condicion2 -> Basta que una de las condiciones falle para que de false.
    || or -> condicion1 || condicion2 -> Basta que se cumpla una de las condiciones para que de true. Alt +124 "||"
    ! not Negar un estado bool
*/

if (edad === 18 || alumno == "Juan") {
	console.log("La condicion es true");
	console.log("Puedes ingresar. Eres mayor de edad");
} else {
	console.log("La condicion es false");
	console.log("No puedes ingresar. Eres menor de edad");
}

/* If else anidados
    if(condicion){

    }else if(condicion){

    }else if(condicion){

    }else{

    }
*/

if (edad === 18) {
	console.log("Tienes 18 años");
} else if (edad === 19) {
	console.log("Tienes 19 años");
} else if (edad === 20) {
	console.log("Tienes 20 años");
} else {
	console.log("Tienes mas de 20 años");
}

/* Mensajes de alerta  */
// console.log("############### ALERT, CONFIRM Y PROMPT ###############");

/* alert("Bienvenido a mi pagina");
let nombreusuario = prompt("Cuál es tu nombre?");
let edadusuario = confirm("Eres mayor de edad?");
console.log(nombreusuario);
console.log(edadusuario); */

/* IMPRIMIR EN CONSOLA */
console.log("###################### IMPRIMIR EN CONSOLA #################");

const heroes = [
	"Batman",
	"Superman",
	"Ironman",
	"Black widow",
	12,
	true,
	() => {}, //Funciones flecha
	{ nombre: "Renatto", apellido: "Minaya" }, //Objetos literales
];
console.log("Pagina de IEEE");
console.warn("Completa los campos");
console.error("Error encontrado en tu codigo");
console.table(heroes);

/* FUNCIONES */

console.warn("############# FUNCIONES ################");

function primerafuncion(nombre = "Alanis", apellido = "IEEE") {
	console.log("Nombre: " + nombre);
	return "Cualquier tipo de dato";
	console.log("Apellido: " + apellido); // Signo de + es concatenacion de strings
	console.log("Esta es mi primera funcion");
}

let retornoFuncion = primerafuncion("Renatto", "Minaya");
console.log(retornoFuncion);
console.log(typeof retornoFuncion);

let funcionflecha = (nombre) => console.log(nombre);

funcionflecha("Renatto");

/*  DOM: DOCUMENT OBJECT MODEL */
console.warn("########### MANEJO DEL DOM #############");

let btnSubmit = document.querySelector("#btn-submit");
let nombreFormulario = document.querySelector("#name");
let correo = document.querySelector("#mail");
let comedia = document.querySelector("#comedia");
let terror = document.querySelector("#terror");
let drama = document.querySelector("#drama");
let accion = document.querySelector("#accion");
let suspenso = document.querySelector("#suspenso");
let romance = document.querySelector("#romance");

/*Creacion de una nueva etiqueta con estilo */
let newparrafo = document.createElement("p");
newparrafo.style.backgroundColor = "black";
newparrafo.style.color = "green";
newparrafo.style.padding = "10px";
newparrafo.style.zIndex = "50";
newparrafo.style.width = "200px";
newparrafo.style.height = "100px";

newparrafo.innerText = "Elemento agregado";

const section = document.querySelector("section");

let recomendacion = document.querySelector("#recomendation");
let pelideseada = document.querySelector("#deseada");
let descripcion = document.querySelector("#description");

console.log(btnSubmit);
console.warn("################## EVENTOS ############");
/*EVENTOS 
    -focus
    -click
    -mouseover
    -keypress
*/
btnSubmit.addEventListener("click", (evento) => {
	evento.preventDefault();
	console.log("Diste click");
	console.log("Nombre: " + nombreFormulario.value);
	console.log("Correo: " + correo.value);
	console.log("Comedia: " + comedia.checked);
	console.log("Terror: " + terror.checked);
	console.log("Drama: " + drama.checked);
	console.log("Accion: " + accion.checked);
	console.log("Suspenso: " + suspenso.checked);
	console.log("Romance: " + romance.checked);
	console.log("Pelicula recomendada: " + recomendacion.value);
	console.log("Pelicula deseada: " + pelideseada.value);
	console.log("Descripcion: " + descripcion.value);

	section.append(newparrafo); //Agregando newparrafo a section

	if (nombreFormulario.value == "") {
		alert("Por favor, llena el nombre");
	}
});
