//Desafio Objeto

class Prepizzita {
    constructor(id, desc,precio, img, stock){
        this.id=id;
        this.desc=desc;
        this.precio=precio;
        this.img=img;
        this.stock=stock;
    }

vender(cantidad){
      if (cantidad <= this.stock){
        this.stock -= cantidad;
     }
    }
}
const pizza = new Prepizzita (1, "Nuestra prepizza amasada con 72hs de fermentacion",350,"../assets/prepi.jpg",10)

let cantidad= prompt("Cuantas prepizzas queres?")

pizza.vender(cantidad);

document.write(`Felicitaciones por tu compra, nos quedan disponibles ${pizza.stock} pizzas`)
