export abstract class Tool {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }
  abstract write(): void;
}
