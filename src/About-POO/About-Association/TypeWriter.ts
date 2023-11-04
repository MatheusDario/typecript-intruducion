import { Tool } from './Tool';

export class TypeWriter extends Tool {
  write(): void {
    console.log(`${this.name} is Typing`);
  }
}
