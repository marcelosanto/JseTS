// Encadeamento opcional ( ? ) & Operador de coalescência nula ( ?? )

type Documento = {
  titulo: string
  texto: string
  data?: Date
}

const documento: Documento = {
  titulo: '12 Regras para a vida',
  texto: 'o texto',
  //data: new Date(),
}

console.log(documento.data?.toDateString() ?? '1 - Ixi, não existe data')
console.log(undefined ?? '2 - Ixi, não existe data')
console.log(null ?? '3 - Ixi, não existe data')
