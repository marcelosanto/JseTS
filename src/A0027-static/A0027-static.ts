export class Pessoa {
  static idadePadrao = 0
  static cpfPadrao = '000.000.000-00'

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao)
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '121.121.151-55')
const pessoa2 = Pessoa.criaPessoa('Alice', 'Santos')
console.log(pessoa)
console.log(pessoa2)
pessoa.metodoNormal()
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
