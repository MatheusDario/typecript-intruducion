type idade = number;
type Pessoa = {
  nome: string;
  idade: idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Red' | 'Green' | 'Blue';
type CorCMKY = 'Porpule' | 'Yellow';
type CorPreferida = CorCMKY | CorRGB;

const person: Pessoa = {
  nome: 'Matheus',
  idade: 27,
  salario: 100_000,
};

export default function setCorPreferida(person: Pessoa, cor: CorPreferida) {
  return { ...person, corPreferida: cor };
}
console.log(setCorPreferida(person, 'Porpule'));
