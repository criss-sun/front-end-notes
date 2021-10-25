interface obj {
  name: string,
  age?: number
}

function interfaceTest(obj: obj): void {
  console.log(obj);
}

interfaceTest({ name: 'monkey' })

interface point {
  readonly name: string
}

let p1: point = { name: '1' }
// p1.name = '2'

let arr: number[] = [1, 2, 3, 4]
let arr1: ReadonlyArray<number> = arr

