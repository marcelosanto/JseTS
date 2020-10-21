interface Constructor {
  new (...args: any[]): any
}

function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function <T extends Constructor>(target: T): T {
    console.log('Sou o decorador e recebi', target)

    return class extends target {
      cor: string
      nome: string

      constructor(...args: any[]) {
        super(...args)
        this.nome = this.inverte(args[0])
        this.cor = this.inverte(args[1])
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2
      }
    }
  }
}

function outroDecorador(target: Constructor) {
  console.log('Sou o  decorador')
}

@outroDecorador
@inverteNomeECor('valor1', 'valor2') // é chamado na criação da classe
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe')
  }
}

const animal = new Animal('Gabriel', 'azulão')
console.log(animal)
