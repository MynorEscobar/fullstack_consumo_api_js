const url = "https://rickandmortyapi.com/api/character/";

async function obtenerPersonajes() {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const personajes = datos.results;
        const cardProductos = document.getElementById("productos");
        
        personajes.forEach(personaje => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
            <img src="${personaje.image}" alt="${personaje.name}">
            <h2>${personaje.name}</h2>  
            <p>Especie: ${personaje.species} Estado: ${personaje.status}</p>
            <p>Genero: ${personaje.gender}</p>
            <p>Localización: ${personaje.location.name}</p>
            <p>Origen: ${personaje.origin.name}</p>
            <button>Más información</button>
          `;
            personaje.episode.forEach(capitulo =>{
                console.log(`${personaje.name} ${capitulo}`)
            })
            cardProductos.appendChild(card);           
        });
        
    } catch (error) {
        console.error("Error al obtener personajes:", error);
    }
}

obtenerPersonajes();
