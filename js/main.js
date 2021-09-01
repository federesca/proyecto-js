// Variables
const ingredientes = [
    {
        id:1,
        name : "Masa",
        img : '../assets/png-pizzas/MASA.png'
    },
    {
        id:2,
        name : "Salsa",
        img : '../assets/png-pizzas/salsa.png'
    },
    {
        id:3,
        name : "Cebolla Caramelizada",
        img : '../assets/png-pizzas/cebolla.png'
    },
    {
        id:4,
        name : "Boconccinos",
        img : '../assets/png-pizzas/bocconcinos.png'
    },
    {
        id:5,
        name : "Muzzarela",
        img : '../assets/png-pizzas/muzza.png'
    },
    {
        id:6,
        name : "Tomates Secos",
        img : '../assets/png-pizzas/tomates-secos.png'
    },
    {
        id:7,
        name : "Panceta",
        img : '../assets/png-pizzas/panceta.png'
    },
    {
        id:8,
        name : "Queso Azul",
        img : '../assets/png-pizzas/roque.png'
    },
    {
        id:9,
        name : "Huevo",
        img : '../assets/png-pizzas/huevo.png'
    },
    {
        id:10,
        name : "Provolone",
        img : '../assets/png-pizzas/provolone.png'
    },
]

let ingredientesFavoritos = [];

const contenedorIngredientes = document.querySelector(".contenedor-ingredientes");
const contenedorFavoritos = document.querySelector(".listado-favoritos");

obtenerDatosDeLocalStorage();

document.addEventListener('DOMContentLoaded', () => {

    mostrarIngredientes();
})

function mostrarIngredientes(){
    ingredientes.forEach((ingredientes) => {
        
        /* Mostras ingredientes en el html */
        
        const div = document.createElement('div');
        div.classList.add('card-dark');

        const imagen = document.createElement('img');
        imagen.src = ingredientes.img
        imagen.classList.add('imagen-ingrediente');

        const titulo = document.createElement('h2');
        titulo.classList.add('titulo-ingrediente');
        titulo.textContent = ingredientes.name;

        const btnAgregar = document.createElement('button');
        btnAgregar.classList.add('btn-favorito');
        btnAgregar.textContent = "Elegir ingrediente";
        btnAgregar.onclick = () => {
            agregarAFavorito(ingredientes.id);
        };

        div.appendChild(imagen);
        div.appendChild(titulo);
        div.appendChild(btnAgregar);

        contenedorIngredientes.appendChild(div);
    })
}

function agregarAFavorito(id) {
    const ingredienteFavorito = ingredientes.find( ingrediente => {
        return ingrediente.id === id;
    })

    ingredientesFavoritos.push(ingredienteFavorito);

    localStorage.setItem("ingredientesFavoritos", JSON.stringify(ingredientesFavoritos));

    console.log(ingredientesFavoritos);
    mostrarIngredientesFavoritos(ingredientesFavoritos);
}

function mostrarIngredientesFavoritos(arreglo){

    limpiarHTML();
    arreglo.forEach( ingrediente => {

        /* InnerHtml */
        contenedorFavoritos.innerHTML += `
            <div class = "card-dark">
                <img src = "${ingrediente.img}" class = "imagen-comida"/>
                <h2> ${ingrediente.name} </h2>
            </div>
        `
    })
}

function limpiarHTML() {
    contenedorFavoritos.innerHTML = "";
}

function obtenerDatosDeLocalStorage() {
    const localIngredientesFavoritos = localStorage.getItem('ingredientesFavoritos');

    if (localIngredientesFavoritos) {
        const array = JSON.parse(localIngredientesFavoritos);

        ingredientesFavoritos = array;

        mostrarIngredientesFavoritos(array);
    }
}
