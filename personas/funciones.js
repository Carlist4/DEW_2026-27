function buscarPersonaPorId(personas, id) {
    for (let persona of personas) {
        if (persona.id == id) {
            return persona;
        }
    }
    return null;
}

function filtrarPersonasPorEstudios(personas, estudios) {
    let personasConEstudios;
}