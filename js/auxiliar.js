export function guardar(clave, valor) {
    valor = JSON.stringify(valor);
    localStorage.setItem(clave, valor);
}

export function recuperar(clave) {
    return JSON.parse(localStorage.getItem(clave));
}