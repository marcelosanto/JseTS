type TemNome = { nome: string }
type TemSobreNome = { sobrenome: string }
type TemIdade = { idade: number }
type Pessoa = TemNome & TemSobreNome & TemIdade

const person: Pessoa = {
  nome: 'Marcelo',
  sobrenome: 'Santos',
  idade: 29,
}

console.log(person)
