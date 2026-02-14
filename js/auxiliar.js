export function guardar(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

export function recuperar(clave) {
    const dato = localStorage.getItem(clave);
    return dato ? JSON.parse(dato) : null;
}