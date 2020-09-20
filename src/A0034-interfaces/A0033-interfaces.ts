interface TipoNome {
  nome: string
}

interface TipoSobrenome {
  sobrenome: string
}

interface TipoNomeCompleto {
  nomeCompleto: () => string
}

// type alias => não tem restrição, pode fazer o que quiser.
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto

// interface => estou modelando uma forma
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}

const pessoa = new Pessoa('Marcelo', 'Santos')
console.log(pessoa.nomeCompleto())
