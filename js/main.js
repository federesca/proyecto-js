function saludar () {
  let saludo;
  saludo = prompt ("Bienvenido a Napolitino, ¿Como te llamas?") ; 
  if (saludo== "") {alert ("No nos dijiste tu nombre");}
}

saludar()

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

// mostrar productos
document.write(`
  <ul>
    ${boxes.map((Box) => {
      return `
        <li class=text-center>
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
    document.write(`No encontramos ese producto.`);
  }
}

function envio () {
let lugar = prompt ('Donde enviamos tu box? (Palermo,Boedo o Caballito)');
  if (lugar == "") { alert (`Ingresa tu barrio`);}
  switch (lugar){
    case "Palermo":  return 200;
    break
    case "Boedo": return 0;
    break
    case "Caballito": return 100;
    break
    default: alert (`No llegamos a esa zona o escribiste mal el nombre`)
    break;
  }
}

alert (`El envio a esa zona te sale ${envio()} pesos. Al final de la web podes hacer tu pedido`)