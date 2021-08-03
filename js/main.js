 // Desafio 1
let nombre = prompt ("Ingrese su nombre completo")
let edad = parseInt(prompt ("Ingrese su edad"))

alert( "Bienvenido" + " " + nombre)

document.write( nombre + " es momento de que aprendas nuevas herramientas </br>");

// Desafio 2

let pago = prompt("Como prefieres abonar?");

if(pago == 'efectivo') {
    document.write('Tu pago en efectivo se ha realizado con exito');
} else if( pago == 'tarjeta' ) {
    document.write('Tu pago en tarjeta se ha realizado con exito');
} else {
    document.write('Tu pago ha sido rechazado');
}

// Desafio 3

for (let i = 1; i <= 5; i += 1 )  {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    document.write( " Turno  N° "+i+" Nombre: "+ingresarNombre);
}

