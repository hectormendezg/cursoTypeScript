//Type assetion

let channel: any = "TecnoSecurity";

let channelStr = <string>channel; //====> convierte la variable a string
let channelStr1 = channel as string; //===> es lo mismo q la linea 6

const myCanvas = document.getElementById("main") as HTMLCanvasElement;
const myCanvas1 = <HTMLCanvasElement>document.getElementById("main"); //=====> es lo mismo q la linea 8
