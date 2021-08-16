// //Desafio Objeto

// class Boxes {
//     constructor(nombre, desc,precio,stock){
//         this.nombre=nombre;
//         this.desc=desc;
//         this.precio=precio;
//         this.stock=stock;
//     }
// vender(){
//     this.stock= false;
//     }
// }

// const pizza = new Prepizzita (1, "Nuestra prepizza amasada con 72hs de fermentacion",350,"../assets/prepi.jpg",10)

// let cantidad= prompt("Cuantas prepizzas queres?")

// pizza.vender(cantidad);

// document.write(`Felicitaciones por tu compra, nos quedan disponibles ${pizza.stock} pizzas`)

//Desafio Arrays

const boxes = [
    {box: 'PrePizzita' , precio: 300} ,
    {box: 'Boconna' , precio: 750},
    {box: 'Blue' , precio: 650},
    {box: 'Pancetona' , precio: 750},
    {box: 'Sin Vueltas' , precio: 650},
]

function menor () {
    boxes.sort((p1 , p2) => {
        if (p1.precio < p2.precio) {
            return -1;
        } else if (p1.precio > p2.precio) {
            return 1;
        } else {
            return 0;
        }
    }) 
    
    console.table(boxes)
}

function mayor () {
    boxes.sort((p1 , p2) => {
        if (p1.precio > p2.precio) {
            return -1;
        } else if (p1.precio < p2.precio) {
            return 1;
        } else {
            return 0;
        }
    }) 
    
    console.table(boxes)
}
let consulta = prompt("Usted prefiere ordenar los productos desde mayor precio o desde menor precio? Ingrese mayor o menor: ")

if (consulta === 'mayor') {
    mayor()
} else if (consulta === 'menor') {
    menor()
}
