type Adder = {
  (x: number): number
  (x: number, y: number): number
  (...arg: number[]): number
}

const adder: Adder = (x: number, y?: number, ...arg: number[]) => {
  if (arg.length > 0) return arg.reduce((s, v) => s + v, 0) + x + (y || 0)
  return x + (y || 0)
}

console.log(adder(1, 3))
console.log(adder(1, 3, 9, 5, 7, 6, 7, 2, 1))
