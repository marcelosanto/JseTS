const objetoA: {
  readonly chaveA: string // readonly -> nao deixa a chave ser alterada
  chaveB: string
  chaveC?: string
  [key: string]: unknown
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

objetoA.chaveB = 'Nova Chave'
objetoA.chaveC = 'Esse Valor'
objetoA.chaveD = 'Quero isto'

console.log(objetoA)
