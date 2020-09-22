// declaration merge

interface Pessoal {
  nome: string
}

interface Pessoal {
  readonly sobrenome: string
  readonly enderecos: readonly string[]
  idade?: number
}

const pessoal: Pessoal = {
  nome: 'Marcelo',
  sobrenome: 'Santos',
  enderecos: ['Rua Capivary'],
}

console.log(pessoal)
