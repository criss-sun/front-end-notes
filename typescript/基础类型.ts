let isDone: boolean = false
let num: number = 6
let str: string = 'abcdefg'
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let tuple1: [number, string] = [1, '123']

enum Color { Red = 2, Green, Blue }
let c: Color = Color.Red
console.log(c);

let colorName = Color[3]
console.log(colorName);

let notSure: any
notSure = '123'
notSure = 123

let arr3: any[] = [1, 2, 3]
arr3[1] = '2'

function voidTest(): void {
  console.log('void');
}

function neverTest(): never {
  throw new Error('徐毅叶死了')
}
// neverTest()

function objectTest(obj: {
  name: string
}): void {
  console.log(obj);

}
objectTest({ name: 'monkey' })

let str1: string = 'abc'
let strLen: number = (<string>str1).length