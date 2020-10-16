type MeuTipo = number

const arrayNumeros: Array<number> = [1, 2, 3, 5, 8, 9]
console.log(arrayNumeros)

async function promiseAsync() {
  return 1
}

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

promiseAsync().then((resultado) => console.log(resultado + 1))
minhaPromise().then((resultado) => console.log(resultado + 1))
