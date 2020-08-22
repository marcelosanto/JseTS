export class Empresa {
  readonly nome: string // public não necessário
  protected readonly colaboradores: Colaborador[] = [] // protected pode ser acessado tanto na classe, quanto na subclasse.
  private readonly cnpj: string // private so pode se acessado na classe que foi criado

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
export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11151541515/0001-55')
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop()
    if (colaborador) return colaborador
    return null
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy()
const colaborador1 = new Colaborador('Marcello', 'Santos')
const colaborador2 = new Colaborador('Alice', 'Santos')
const colaborador3 = new Colaborador('Gabriel', 'Santos')
empresa1.adicionarColaborador(colaborador1)
empresa1.adicionarColaborador(colaborador2)
empresa1.adicionarColaborador(colaborador3)
empresa1.popColaborador()
console.log(empresa1)
