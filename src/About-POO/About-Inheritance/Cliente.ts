import { Person } from './Inheritance';

export class Cliente extends Person {
  getFullName(): string {
    return `O cliente se chama ${this.firstName} ${this.lastName}`;
  }
}

const cliente1 = new Cliente('João', 'Souza', 35, '000.000.000-00');
console.log(cliente1.getFullName());
