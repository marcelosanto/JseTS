type CoresObj = typeof coresObj //pega o tipo completo do objeto
type CoresChaves = keyof CoresObj // pega as chaves do objeto

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
}

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor]
}

console.log(traduzirCor('vermelho', coresObj))
console.log(traduzirCor('azul', coresObj))
console.log(traduzirCor('verde', coresObj))
console.log(traduzirCor('roxo', coresObj))
