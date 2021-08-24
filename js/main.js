// //Saludamos al usuario

// function saludar () {
//   let saludo;
//   saludo = prompt ("Bienvenido a Napolitino, ¿Como te llamas?") ;
//   if (saludo== "") {alert ("No nos dijiste tu nombre");
// }
// }

// saludar()

// //declaramos objeto

// class Box {
//   constructor(name, price, available, description = true) {
//     this.name = name;
//     this.price = price;
//     this.available = available;
//     this.description= description;
//   }
// }

// // cargar productos

// const boxes = [
//   new Box('Boconna Box', 600,true,`Boconccinos y tomates secos`),
//   new Box('Blue Box', 800,true,`Queso azul y cebolla caramelizada`),
//   new Box('Pancetona', 500,false,`Panceta y huevo`),
//   new Box('Sin Vueltas', 600,true,`Clasica de muzza`),
//   new Box('Burra', 400,true,`Burrata y albahaca`),
//   new Box('Serrana', 300,true,`Jamon crudo y tomates hidratados`)
// ];

// // mostrar productos al final del sitio

// document.write(`
//   <ul>
//     ${boxes.map((Box) => {
//       return `
//         <li>
//           <strong class="card-title">${Box.name}</strong>
//           <ul class="card-text">
//             <li>Precio: ${Box.price}</li>
//             <li>${Box.description}</li>
//             <li>Stock: ${Box.available ? 'Disponible' : 'Sin Stock'}</li>
//           </ul>
//         </li>
//       `
//     }).join('')}
//     <button class="btn-warning margin left = auto margin right = auto" onclick="initBuy()">Pedime tu box</button>
//   </ul>
// `);
// // preguntar al usuario que producto quiere comprar
// function initBuy() {
//   const value = prompt('Que box desea pedir?');
//   const BoxFound = boxes.find((Box) => {
//     return Box.name === value;
//   });

//   if (BoxFound) {
//     document.write(`Usted eligió: ${BoxFound.name}. El precio es de ${[BoxFound.price]} mas el costo de envio`);
//   } else {
//     document.write(`No encontramos ese producto o no lo escribiste bien`);
//   }
// }

// //preguntar la zona de envio del usuario y devolver el costo del mismo

// function envio () {
// let lugar = (prompt('Donde que zona sos ? (Solo enviamos a Palermo,Boedo o Caballito)')).toLowerCase();
//   if (lugar == "") { alert (`Ingresa tu barrio para conocer tu costo de envio`);}
//   switch (lugar){
//     case "palermo":  return 200;
//     break
//     case "boedo": return 0;
//     break
//     case "caballito": return 100;
//     break
//     default: alert (`No llegamos a esa zona`)
//     break;
//   }
// }
// alert (`El envio a esa zona te sale ${envio()} pesos. Al final de la web podes hacer tu pedido`)

function recogerDatos(){
  let nombreCliente = document.getElementById("nombre_cliente").value
  let apellidoCliente = document.getElementById("apellido_cliente").value
  let emailCliente = document.getElementById("email_cliente").value

  let box = [];

  let boxPrepizzita = document.getElementById("prepizzita")
  let boxBoconna = document.getElementById("boconna")
  let boxBlue = document.getElementById("blue")
  let boxSinVueltas = document.getElementById("sinvueltas")
  let boxPancetona = document.getElementById("pancetona")
  let boxSerrana = document.getElementById("serrana")

  if (boxPrepizzita.checked){
    box.push (boxPrepizzita.value);
  }
  if (boxBoconna.checked){
    box.push (boxBoconna.value);
  }
  if (boxBlue.checked){
    box.push (boxBlue.value);
  }
  if (boxSinVueltas.checked){
    box.push (boxSinVueltas.value);
  }
  if (boxPancetona.checked){
    box.push (boxPancetona.value);
  }
  if (boxSerrana.checked){
    box.push (boxSerrana.value);
  }

  let extras = [];

  let extraDobleMuzzarella = document.getElementById ("customCheck1");
  let extraSalsa = document.getElementById ("customCheck2");
  let extraBacon = document.getElementById ("customCheck3");
  let extraHuevo = document.getElementById ("customCheck4");

  if (extraDobleMuzzarella.checked){
    extras.push (extraDobleMuzzarella.value);
  }
  if (extraSalsa.checked){
    extras.push (extraSalsa.value);
  }
  if (extraBacon.checked){
    extras.push (extraBacon.value);
  }
  if (extraHuevo.checked){
    extras.push (extraHuevo.value);
  }

  let mensajeFinal ="El cliente " + nombreCliente + " " + apellidoCliente+ " " +
                    "email: " + emailCliente+ " " +
                    "ha elegido una" + " " + box + " " + "con" + " " + extras;

  for (let i = 0; i < extras.length; i++){
    const element = extras [i];
  }

  alert(mensajeFinal);

}
