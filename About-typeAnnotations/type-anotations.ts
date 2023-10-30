/* eslint-disable */

// Tipos básicos (Ocorre inferẽncia de tipo)
let nome: string = 'Matheus';
let idade: number = 26;
let adulto: boolean = true;
let simbulo: symbol = Symbol('Qualquer');

// Arrays
let numbersArray: Array<number> = [1, 2, 3];
let numbersArray2: number[] = [0, 1, 2];

// Objetos
let pessoa: {nome: string, idade:number, adulto?: boolean} = {
    idade: 26,
    nome: 'Matheus',
    adulto: true,
}

function additon(x:number, y:number):number {
  return x + y;
}

const subtration: (x:number, y:number) => number = (x, y) => x -y;
console.log(subtration(10, 15));


export default additon;