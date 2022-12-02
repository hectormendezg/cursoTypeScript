// Funciones!!

/* function greet(name: string) {
  console.log(`Hola, ${name.toLocaleUpperCase()}!!!!`);
}

greet("Héctor");
 */

/* function getNumber(): number {
  return Math.floor(Math.random() * 100);
}

console.log(getNumber()); */

function printPositions(position: { lat: number; long: number }) {
  console.log(
    `Latitude & Longitud are: LAT ${position.lat} LONG:${position.long}`
  );
}

printPositions({ lat: 33, long: 55 });
