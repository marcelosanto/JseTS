renfunction decorator(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  console.log(classPrototype)
  console.log(nomeMetodo)
  console.log(descriptor)
  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase()
    },
  }
}


const pessoa = new UmaPessoa('Alice', 'Santos', 8)
pessoa.metodo = () => 'KKKkkkkkKKK'
const metodo = pessoa.metodo('Oieee gatinha ')
console.warn(metodo)
