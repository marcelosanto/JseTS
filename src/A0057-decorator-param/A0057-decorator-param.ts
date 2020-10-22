function decorador(classPrototype: any, nome: string | symbol): any {
  let valorPropiedade: any

  return {
    get: () => valorPropiedade,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropiedade = valor.split('').reverse().join('')
        return
      }
      valorPropiedade = valor
    },
  }
}

export class UmaPessoa {
  @decorador
  nome: string
  @decorador
  sobrenome: string
  @decorador
  idade: number

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g)
    const primeiroNome = palavras.shift()
    if (!primeiroNome) return
    this.nome = primeiroNome
    this.sobrenome = palavras.join(' ')
  }
}

const pessoa = new UmaPessoa('Alice', 'Santos', 8)
const metodo = pessoa.metodo('Oieee gatinha ')
console.warn(metodo)
