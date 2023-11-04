import { Tool } from './Tool';

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} is writing`);
  }
}
