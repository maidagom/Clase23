export function calcularDescuento(precio, descuento) {
  if (descuento <= 0) return precio;

  const resultado = precio * (1 - descuento / 100);
  return Math.max(resultado, 0);
}