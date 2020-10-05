export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n
    return this
  }

  sub(n: number): this {
    this.numero -= n
    return this
  }

  div(n: number): this {
    this.numero /= n
    return this
  }

  mult(n: number): this {
    this.numero *= n
    return this
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n
    return this
  }
}

const calculadora = new SubCalculadora(9)
const result = calculadora.mult(7).add(7).div(2).sub(26).pow(2)
console.log(result)

// Builder -- GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null
  private url: string | null = null

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }

  setUrl(url: string): this {
    this.url = url
    return this
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`)
  }
}

const request = new RequestBuilder() // Builder
request.setUrl('https://www.google.com').setMethod('post').send()
