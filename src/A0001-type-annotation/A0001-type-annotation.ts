/* eslint-disable */

// Tipos básico (aqui ocorre inferência de tipos)
let nome: string = 'Luiz' // Qualquer tipo de strings
let idade: number = 30 // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o744
let adulto: boolean = true // true ou false
let simbolo: symbol = Symbol('qualquer-symbol') // symbol
//let big: bigint = 10n // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3]
let arrayDeStrings: Array<string> = ['a', 'b', 'c']
let arrayDeStrings2: string[] = ['a', 'b', 'c']

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Marcello',
  idade: 29,
  adulto: true,
}

// Funções
function soma(x: number, y: number): number {
  return x + y
}
const result = soma(2, 2)

const soma2: (x: number, y: number) => number = (x, y) => x + y
