// Array<T> - T[]

export function multiplicarArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1)
}

export function concatenarStrings(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor)
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase())
}

const result = multiplicarArgs(1, 2, 3)

const concatenacao = concatenarStrings('a', 'b', 'c')

const upper = toUpperCase('a', 'b', 'c')

console.log(result)
console.log(concatenacao)
console.log(upper)
