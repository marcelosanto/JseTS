export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf
  }

  set cpf(valor: string) {
    console.log('SETTER CHAMADO')
    this._cpf = valor
  }

  get cpf(): string {
    console.log('GETTER CHAMADO')
    return this._cpf.replace(/\D/g, '')
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '121.121.151-55')
pessoa.cpf = '121.121.151-99'
console.log(pessoa.cpf)
