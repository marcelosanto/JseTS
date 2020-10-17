// Record
const objeto1: Record<string, string | number> = {
  nome: 'Marcello',
  sobrenome: 'Santos',
  idade: 29,
}
console.log(objeto1)

type PessoaProtocol = {
  nome?: string
  sobrenome?: string
  idade?: number
}

// Required -> torna tudo que não é opcional em opcional
// Required -> transforma tudo que é não opcional em opcional
type PessoaRequired = Required<PessoaProtocol>

// Partial -> torna tudo que é requerido em opcional
type PessoaPartial = Partial<PessoaProtocol>

// Readonly
type PessoaReadonly = Readonly<PessoaRequired>

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>

const objeto2: PessoaRequired = {
  nome: 'Marcello',
  sobrenome: 'Santos',
  idade: 29,
}
console.log(objeto2)

// Extract e Exclude
type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'
type TipoExclude = Exclude<ABC, CDE>
type TipoExtract = Extract<ABC, CDE>

//
type AccountMongo = {
  _id: string
  nome: string
  idade: number
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string
}

const accountMongo: AccountMongo = {
  _id: 'oksiajsad8jsadjsa877hudsha',
  nome: 'Marcello',
  idade: 29,
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo
  return { ...accountData, id: _id }
}

const accountApi = mapAccount(accountMongo)
console.log('API:')
console.log(accountApi)

// Module mode
export default 1
