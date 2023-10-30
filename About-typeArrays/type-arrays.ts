export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function joinStrings(...args: string[]): string {
  return args.join('');
}

export function toUpper(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const concatStrings = joinStrings('a', 'b', 'c');
const toAllupper = toUpper(concatStrings);
const result = multiplyArgs(2, 4, 5);
console.log(result);
console.log(toAllupper);
console.log(concatStrings);
