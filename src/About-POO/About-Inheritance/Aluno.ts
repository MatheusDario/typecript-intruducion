import { Person } from './Inheritance';

export class Aluno extends Person {
  getFullName(): string {
    return `O aluno se chama ${this.firstName} ${this.lastName}`;
  }
}

const aluno1 = new Aluno('Pedro', 'Souza', 17, '000.000.000-00');
console.log(aluno1.getFullName());
