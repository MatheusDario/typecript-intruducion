import { Tool } from './Tool';
import { TypeWriter } from './TypeWriter';
import { Pen } from './Pen';

export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  set tool(tool: Tool) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  get name(): string {
    return this._name;
  }

  write(): void {
    if (this.tool === null) {
      console.log('Não posso escrever sem uma ferramenta');
      return;
    }
    this.tool.write();
  }
}

const escritor = new Writer('Matheus Dario');
const caneta = new Pen('Bic');
const MaquinaEscrever = new TypeWriter('Maquina');

console.log(escritor.name);
console.log(caneta.name);
console.log(MaquinaEscrever.name);

escritor.tool = MaquinaEscrever;
escritor.write();
