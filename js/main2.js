//Desafio complementario
const saludar = function(nombre, apellido,comentario){
    alert(`Hola ${nombre} ${apellido},${comentario}`)
}

let nombre="Federico"
let apellido="Resca"
let comentario="¿Que paso hoy?"

saludar(nombre,apellido,comentario)

function speak (user, texto, isUpperCase) {
    let mensaje= `${user} dice ${texto}`
    if ( isUpperCase ) {
        mensaje= mensaje.toUpperCase()}
    return mensaje
}

document.write(speak("Fede","que hoy es un lindo dìa <br><br>"))
document.write(speak("Jose","que hoy es un feo dìa <br><br> ",true))

const adios = function(){
    document.write(`Chau hasta la proxima <br><br> `)
}

adios()

//Haciendo una operacion

const multiplicacion = (a,b) => a*b
const resta = (a,b) => a-b
const descuento = (a,b) => multiplicacion(a,b) / 100

let precioProd= 500;
let cantProd=1;
let totalDesc=50;

let precioTotal= resta(multiplicacion(precioProd,cantProd), multiplicacion(descuento(precioProd,totalDesc),cantProd));
document.write(`El precio total de su pedido es ${precioTotal}`)

