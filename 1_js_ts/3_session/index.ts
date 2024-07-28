import { Person } from "./ex_1";
import { sumOrConcatenate } from "./ex_2";
import { Car, Motorcycle } from "./ex_3";
import { genericFuncion } from "./ex_4";

//? (ex_1) Ahora define una arrow function que tenga como parámetro esta interfaz y que devuelva un array con el valor de sus propiedades, esta función tiene que tener tipado el parámetro de entrada y el return
const showPeople = (person: Person): Person[] => {
  const people = [person];
  return people;
};

console.log(
  "Ejercicio 1: Interaces \n",
  showPeople({ name: "John", age: 30, profession: "Developer" })
);

//? (ex_2)  La función devolverá una suma si los dos parámetros son números, una concatenación con el símbolo `-` si son los dos `strings` o una cadena concatenadad con `:` si uno es un number y el otro string.
console.log(
  "Ejercicio 2: Tipos \n ambos number (suma) \n",
  sumOrConcatenate(1, 2),
  "\n tipos diferentes \n",
  sumOrConcatenate(3, " string"),
  "\n ambos string \n",
  sumOrConcatenate("string ", " string")
);

//? (ex_3) Escribe una función que acepte un parámetro que pueda ser `Car` o `Motorcycle` que, primero llame a turnOnEngine, y luego si es Car llame a pressPedal pero si es Motorcycle llame a openThrottle().
const defineVehicle = (vehicle: Car | Motorcycle): vehicle is Car => {
  //? Para saber si es un Car, se puede comprobar si la propiedad pressPedal existe en el objeto
  //? Esto se llama type guard o type predicate
  const predicate = (vehicle as Car).pressPedal !== undefined;
  return predicate;
};
const startVehicle = (vehicle: Car | Motorcycle) => {
  vehicle.turnOnEngine();
  if (defineVehicle(vehicle)) {
    vehicle.pressPedal();
  } else {
    vehicle.openThrottle();
  }
};

const car: Car = {
  tires: 4,
  turnOnEngine: () => console.log("Car engine on"),
  pressPedal: () => console.log("Car pedal pressed"),
};

const motorcycle: Motorcycle = {
  tires: 2,
  turnOnEngine: () => console.log("Motorcycle engine on"),
  openThrottle: () => console.log("Motorcycle throttle opened"),
};

console.log("Ejercicio 3: Type Guards");
startVehicle(car);
startVehicle(motorcycle);

//? (ex_4) y devuelva el mismo array sin el primer elemento.
const gFunct = <T>(arr: T[]) => genericFuncion(arr);

console.log(
  "Ejercicio 4: Generics \n numers:\n",
  gFunct([1, 2, 3, 4, 5]),
  "\n strings:\n",
  gFunct(["a", "b", "c", "d", "e"]),
  "\n mixed:\n",
  gFunct([1, "b", 3, "d", 5])
);
