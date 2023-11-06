type VotationOption = {
  option: string;
  numberOfVotes: number;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public _titleVotation: string) {}

  addVotationOption(...votationOptions: VotationOption[]): void {
    this._votationOptions.push(...votationOptions);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotatition(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation._titleVotation);
      for (const votationOptions of votation.votationOptions) {
        console.log(votationOptions.option, votationOptions.numberOfVotes);
      }
    }
  }
}

const votation1 = new Votation('Qual seu Herói preferido ?');
votation1.addVotationOption(
  { option: 'Superman', numberOfVotes: 0 },
  { option: 'Batman', numberOfVotes: 0 },
  { option: 'Aquaman', numberOfVotes: 0 },
  { option: 'Robin', numberOfVotes: 0 },
);
votation1.vote(0);
votation1.vote(0);
votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(3);

const app = new VotationApp();
app.addVotatition(votation1);

app.showVotations();
