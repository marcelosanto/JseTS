export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade
  }

  getCpf(): string {
    return this.cpf
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf)
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES')
    return super.getNomeCompleto()
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do Cliente: ' + this.nome + ' ' + this.sobrenome
  }
}

const pessoa = new Pessoa('Marcelo', 'Santos', 29, '128.128.128-28')
const aluno = new Aluno('Marcelo', 'Santos', 29, '128.128.128-28', 'A0022B')
const cliente = new Cliente('Marcelo', 'Santos', 29, '128.128.128-28')

console.log(aluno.getNomeCompleto())
console.log(pessoa.getNomeCompleto())
console.log(cliente.getNomeCompleto())
console.log(aluno)
