// // //  // Desafio 1
// let nombre = prompt("Ingrese su nombre completo")
// let edad = parseInt(prompt("Ingrese su edad"))

// alert("Bienvenido" + " " + nombre)

// alert(nombre + " es momento de que aprendas nuevas herramientas");

// // Desafio 2

// const pago = prompt("Como prefieres abonar?").toLowerCase();

// switch (pago) {
//     case "efectivo":
//         document.write(`Pagaste con ${pago}`);
//         break;
//     case "tarjeta":
//         document.write(`Pagaste con ${pago}`);
//         break;
//     case "mercadopago":
//         document.write(`Pagaste con ${pago}`);
//         break;
//     default:
//         document.write("Tu pago fue rechazado");
//         break;
// }

// // Desafio 3 - While

// let entrada = prompt("Dime tres cualidades tuyas . Sos una persona...");
// while (entrada != "SALIR") {
//     document.write(`<p>Sos una persona ${entrada} </p>`);
//     entrada = prompt("Cuando me hayas contado 3 decime SALIR");
// }

//Desafio Simulador Interactivo

function calcularDescuento(){

let monto_ini =0;
let desc =0;
let imp_desc = 0;
let total =0;

monto_ini = document.getElementById('monto_inicial').value;
desc = document.getElementById('descuento').value;

imp_desc = (monto_ini * desc)/100;

document.getElementById('importe_descontado').value=imp_desc;

total = monto_ini - imp_desc

document.getElementById('total').value=total;
console.log(alert(`Le pagaste a Napolitino ${total}`));
}
