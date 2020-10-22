/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Marcelo'

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('Marcelo')
  console.log(pessoaDoNamespace)

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome do outro namespace'
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Marcelo')
console.log(pessoaDoNamespace)
console.log(MeuNamespace.nomeDoNamespace)
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace)
