interface PessoaProtocolo<T = string, U = number> {
  nome: T
  sobrenome: T
  idade: U
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T
  sobrenome: T
  idade: U
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Marcelo',
  sobrenome: 'Santos',
  idade: 29,
}

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 29,
}

const aluno3: PessoaProtocolo2 = {
  nome: 'Alice',
  sobrenome: 'Santos',
  idade: 8,
}

console.log(aluno, aluno2, aluno3)
