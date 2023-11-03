export class Company {
  public readonly name: string;
  protected readonly cnpj: string;
  private readonly employees: Employe[] = [];

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmploye(...employe: Employe[]): void {
    employe.forEach((employe) => this.employees.push(employe));
  }

  showEmployees(): void {
    for (const employe of this.employees) {
      console.log(employe);
    }
  }
}

export class Employe {
  public readonly firstName: string;
  public readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const company1 = new Company('Google', '11.111.111/0001-01');
const employe1 = new Employe('Matheus', 'Dario');
const employe2 = new Employe('Joaquim', 'James');
const employe3 = new Employe('Joana', 'Costa');
company1.addEmploye(employe1, employe2, employe3);
console.log(company1);
company1.showEmployees();
