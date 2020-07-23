type Idade = number
type Pessoa = {
  nome: string
  idade: Idade
  salario: number
  corPreferida?: string
}
type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type CorPreferida = CorRGB | CorCMYK

const pessoar: Pessoa = {
  nome: 'Marcelo',
  idade: 29,
  salario: 200_000, // 200000
}

export function setCorPreferida(pessoar: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoar, corPreferida: cor }
}

console.log(setCorPreferida(pessoar, 'Amarelo'))
