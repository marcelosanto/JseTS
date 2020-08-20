export class Empresa {
  readonly nome: string // public não necessário
  private readonly colaboradores: Colaborador[] = []
  protected readonly cnpj: string

  constructor(nome: string, cnpj: string) {
    this.nome = nome
    this.cnpj = cnpj
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador)
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador)
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11151541515/0001-55')
const colaborador1 = new Colaborador('Marcello', 'Santos')
const colaborador2 = new Colaborador('Alice', 'Santos')
const colaborador3 = new Colaborador('Gabriel', 'Santos')
empresa1.adicionarColaborador(colaborador1)
empresa1.adicionarColaborador(colaborador2)
empresa1.adicionarColaborador(colaborador3)
console.log(empresa1.nome)
//empresa1.mostrarColaboradores()
