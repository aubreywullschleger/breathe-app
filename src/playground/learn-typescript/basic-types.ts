// Basic Types
// TS supports same types as JS, w/ an extra enumeration type

// Boolean
let isDone: boolean = false

// Number, in both JS and TS numbers are either floating point values or BigIntegers - in TS floating point nums get the type `number` and BigIntegers get `bigint`
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
// let big: bigint = 100n

// String, ts supports single and double quotes
let color: string = 'blue'
color = 'red'

// ts also supports template strings
let fullName: string = `Bob Bobbington`
let age: number = 37
let sentence: string = `Hello, my name is ${fullName}. I'll be ${
    age + 1
} years old next month.`

// Array, can be written in 2 ways:

// type of the elements followed by [] to denote an array of that element type:
let list: number[] = [1, 2, 3]

// or use a generic array type Array<elementType>
let otherList: Array<number> = [1, 2, 3]

// Tuple, tuple types allow you to express an array w/ a fixed number of elements whose types are known, but need not be the same - ex: if you want to represent a value as a pair of a string and number

// declare a tuple type
let x: [string, number]
// initialize it
x = ['hello', 10] // doesn't err
// x = [10, "hello"] // error

//when accessing an element w/ known index the correct type is retrieved:
// console.log(x[1].substring(1)) // errs b/c substring doesnt' exist on number

//accessing an element outside the set of know indices also fails
// x[3] = "world"// errors b/c the tuple type has a length of 2

// Enum, is a way of giving friendly names to sets of numeric values
// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// let c: Color = Color.Green

// by default, enums begin numbering their members starting at 0, you can change this manually by setting the value of one of its members - ex: we can start the previous example at 1 instead of 0
// enum Color {
//   Red = 1,
//   Green,
//   Blue,
// }
// let c: Color = Color.Green

// or we can set all the values
enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
}
let c: Color = Color.Green

// with enums you can also go from a numeric value to the name of that value in the enum, ex - if we had the value 2 but weren't sure what that mapped to in the Color enum above, we could look up the corresponding name:
let colorName: string = Color[2]
console.log(colorName) // 'Green'

// Unknown
//

export {}
