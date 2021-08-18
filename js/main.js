//Saludamos al usuario

function saludar () {
  let saludo;
  saludo = prompt ("Bienvenido a Napolitino, ¿Como te llamas?") ; 
  if (saludo== "") {alert ("No nos dijiste tu nombre");
}
}

saludar()


//declaramos objeto

class Box {
  constructor(name, price, available, description = true) {
    this.name = name;
    this.price = price;
    this.available = available;
    this.description= description;
  }
}

// cargar productos

const boxes = [
  new Box('Boconna Box', 600,true,`Boconccinos y tomates secos`),
  new Box('Blue Box', 800,true,`Queso azul y cebolla caramelizada`),
  new Box('Pancetona', 500,false,`Panceta y huevo`),
  new Box('Sin Vueltas', 600,true,`Clasica de muzza`),
  new Box('Burra', 400,true,`Burrata y albahaca`),
  new Box('Serrana', 300,true,`Jamon crudo y tomates hidratados`)
];

// mostrar productos al final del sitio

document.write(`
  <ul>
    ${boxes.map((Box) => {
      return `
        <li>
          <strong class="card-title">${Box.name}</strong>
          <ul class="card-text">
            <li>Precio: ${Box.price}</li>
            <li>${Box.description}</li>
            <li>Stock: ${Box.available ? 'Disponible' : 'Sin Stock'}</li>
          </ul>
        </li>
      `
    }).join('')}
    <button class="btn-warning margin left = auto margin right = auto" onclick="initBuy()">Pedime tu box</button>
  </ul>
`);
// preguntar al usuario que producto quiere comprar
function initBuy() {
  const value = prompt('Que box desea pedir?');
  const BoxFound = boxes.find((Box) => {
    return Box.name === value;
  });

  if (BoxFound) {
    document.write(`Usted eligió: ${BoxFound.name}. El precio es de ${[BoxFound.price]} mas el costo de envio`);
  } else {
    document.write(`No encontramos ese producto o no lo escribiste bien`);
  }
}

//preguntar la zona de envio del usuario y devolver el costo del mismo

function envio () {
let lugar = (prompt('Donde que zona sos ? (Solo enviamos a Palermo,Boedo o Caballito)')).toLowerCase();
  if (lugar == "") { alert (`Ingresa tu barrio para conocer tu costo de envio`);}
  switch (lugar){
    case "palermo":  return 200;
    break
    case "boedo": return 0;
    break
    case "caballito": return 100;
    break
    default: alert (`No llegamos a esa zona`)
    break;
  }
}
alert (`El envio a esa zona te sale ${envio()} pesos. Al final de la web podes hacer tu pedido`)
