type ObterChaveFn = <o, k extends keyof o>(object: o, chave: k) => o[k]

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave]

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 16,
}

const vacinas = obterChave(animal, 'vacinas')
const cor = obterChave(animal, 'cor')

console.log(vacinas, cor, obterChave(animal, 'idade'))
