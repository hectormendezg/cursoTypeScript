// Basicos o primitivos

let myTypeString: string = "Hola Mundo";
let myTypeNumber: Number = 40;
let myTypeBoolean: boolean = true;

//Array
let arrNumber: number[] = [1, 2, 3, 4];
let arrNumber2: Array<number> = [1, 2, 3, 4];
let arrString: string[] = ["Uno", "Dos"];
let arrAny: any[] = ["Hola", 3, true]; //====> El tipo any, permite cualquier tipo de dato!

//Tuple
let tuplePlayers: [string, number, boolean] = ["Sanchez", 7, true];

//Tuple
let players: [number, string][];
players = [
  [1, "Bravo"],
  [4, "Isla"],
  [8, "Vidal"],
];

//Unions
let myVariable: string | number | null;
