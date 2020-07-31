export function funcao(this: Date, argumento1: string): void {
  console.log(this)
  console.log(argumento1)
}

funcao.call(new Date(), 'Marcello')
