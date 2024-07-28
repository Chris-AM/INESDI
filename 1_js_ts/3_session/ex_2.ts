//? Escribe una función llamada sumOrConcatenate que acepte dos parámetros. Cada uno de estos parámetros podrá ser de tipo number o string. (index.ts)
export const sumOrConcatenate = (
  a: number | string,
  b: number | string
): number | string => {
  if (typeof a === typeof b) {
    //? Si ambos parámetros son number, la función devolverá la suma de ambos forzando a ambas ser number
    //? Si ambos parámetros son string, la función devolverá la concatenación de ambos
    return typeof a === "number" ? (a as number) + (b as number) : `${a}-${b}`;
  }
  //? Si los parámetros son de distinto tipo, la función devolverá la concatenación de ambos
  return `${a}:${b}`;
};
