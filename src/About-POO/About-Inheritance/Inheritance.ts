/*eslint no-unused-vars: */

export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person('Carlos', 'Silva', 54, '000.000.000-00');
console.log(person1.getFullName());
