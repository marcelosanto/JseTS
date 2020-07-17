function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}

const pessoa = {
  nome: 'Marcelo',
  sobrenome: 'Santos',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  },
}

semRetorno('Marcello', 'Santos')
pessoa.exibirNome()

export { pessoa }
