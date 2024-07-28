//? Crea una `función genérica`, que acepte un array que pueda contener `strings` y `numbers`
export const genericFuncion = <T>(arr: T[]): T[] => {
  arr.shift();
  return arr;
};
