//? rea dos interfaces, una llamada `Car` y otra `Motorcycle`.
//? La primera tendrá las propiedades `tires` (number), `turnOnEngine()` (función que devuelve void) y `pressPedal()` (función que devuelve void).
//? La segunda tendrá las propiedades `tires` (number), `turnOnEngine()` (función que devuelve void) y `openThrottle()` (función que devuelve void). (index.ts)

export interface Car {
  tires: number;
  turnOnEngine(): void;
  pressPedal(): void;
}

export interface Motorcycle {
  tires: number;
  turnOnEngine(): void;
  openThrottle(): void;
}
