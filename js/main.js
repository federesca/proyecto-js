// //  // Desafio 1
let nombre = prompt("Ingrese su nombre completo")
let edad = parseInt(prompt("Ingrese su edad"))

alert("Bienvenido" + " " + nombre)

alert(nombre + " es momento de que aprendas nuevas herramientas");

// Desafio 2

const pago = prompt("Como prefieres abonar?").toLowerCase();

switch (pago) {
    case "efectivo":
        document.write(`Pagaste con ${pago}`);
        break;
    case "tarjeta":
        document.write(`Pagaste con ${pago}`);
        break;
    case "mercadopago":
        document.write(`Pagaste con ${pago}`);
        break;
    default:
        document.write("Tu pago fue rechazado");
        break;
}

// Desafio 3 - While

let entrada = prompt("Dime tres cualidades tuyas . Sos una persona...");
while (entrada != "SALIR") {
    document.write(`<p>Sos una persona ${entrada} </p>`);
    entrada = prompt("Cuando me hayas contado 3 decime SALIR");
}