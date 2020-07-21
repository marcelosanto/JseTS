// Tuple
const dadosClientes1: readonly [number, string] = [1, 'Marcelo']
const dadosClientes2: [number, string, string] = [1, 'Marcelo', 'Santos']
const dadosClientes3: [number, string, string?] = [1, 'Marcelo']
const dadosClientes4: [number, string, ...string[]] = [1, 'Marcelo', 'Santos']


// dadosClientes1[0] = 100
// dadosClientes1[1] = 'Gabriel'

console.log(dadosClientes1)
console.log(dadosClientes2)
console.log(dadosClientes3)
console.log(dadosClientes4)

// readonly array
const array1: readonly string[] = ['Marcello', 'Santos']
const array2: ReadonlyArray<string> = ['Marcello', 'Santos']

console.log(array1)
console.log(array2)
