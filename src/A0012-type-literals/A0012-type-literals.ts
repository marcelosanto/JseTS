let l = 10 // eslint-disable-line
l = 0b1010
const m = 10
let a = 100 as const // eslint-disable-line
a = 120

const pessoas = {
  nome: 'Marcelo' as const,
  sobrenome: 'Santos',
}

function escolheCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor
}
console.log(escolheCor('Azul'))
