type VotationOption = {
  numberOfVotes: number
  option: string
}

export class Votation {
  private _votationOptions: VotationOption[] = []
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption)
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return
    this._votationOptions[votationIndex].numberOfVotes += 1
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions
  }
}

export class VotationApp {
  private votations: Votation[] = []

  addVotation(votation: Votation): void {
    this.votations.push(votation)
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details)
      for (const vontationOption of votation.votationOptions) {
        console.log(vontationOption.option, vontationOption.numberOfVotes)
      }
      console.log('###')
      console.log('')
    }
  }
}

const votation1 = new Votation('Qual a sua linguagem de programacao favorita?')

votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 })
votation1.addVotationOption({ option: 'Javascript', numberOfVotes: 0 })
votation1.addVotationOption({ option: 'Typescript', numberOfVotes: 0 })

votation1.vote(0)
votation1.vote(Math.floor(Math.random() * 3 + 1))
votation1.vote(Math.floor(Math.random() * 3 + 1))
votation1.vote(Math.floor(Math.random() * 3 + 1))
votation1.vote(0)
votation1.vote(Math.floor(Math.random() * 3 + 1))

const votationApp = new VotationApp()
votationApp.addVotation(votation1)
votationApp.showVotations()
