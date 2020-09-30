// TypeScript: A Static Type Checker
// static checking is detecting errors in code without running it
// static type checking is determining what’s an error and what’s not based on the kinds of values being operated on
// TypeScript checks a program for errors before execution, and does so based on the kinds of values, it’s a static type checker
// TypeScript is JavaScript’s runtime with a compile-time type checker

// TypeScript is a superset of JS - it relates to js:
// Sytax - js is legal ts, ts doesn"t consider any js code to be an error b/c of its syntax, you can take any working JavaScript code and put it in a TypeScript file without worrying about exactly how it is written
// Types - ts is a types superset, in that it adds rule about how different kinds fof values can be used, we see errors when using some kind of value (a type) in an incorrect way
// Runtime Behavior - ts preserves the runtime behavior of js, This means that if you move code from JavaScript to TypeScript, it is guaranteed to run the same way, even if TypeScript thinks that the code has type errors.
// Erased Types - once ts"s compiler is done checking code it erases the types to produce the resulting "compiled", once the code is compiled the resulting plain js code has no type info. This also means that ts doesn"t change  the bhavior of your program based on the types it inferred. TS doesn"t provide additional runtime libs, your programs will use the same standard libs as js programs so there is no ts specific framework to learn

// Types by Inference
// // TypeScript knows the JavaScript language and will generate types for you in many cases. TypeScript will use the value as its type:
// let helloWorld = "hello world" // helloWorld = let helloWorld: string (in ts)

// Defining types
// // to create an object with an inferred type which includes name: string and id: number, you can write:
// const user = {
//   name: "aubrey",
//   id: 0
// }

// explicitly describe this object’s shape using an interface declaration:
interface User {
    name: string
    id: number
}

// // then declare that a JavaScript object conforms to the shape of your new interface by using syntax like `: TypeName` after a variable declaration:
// const user: User = {
//     name: "aubrey",
//     id: 0,
// }

// // If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:
// const user: User = {
//     username: "aubrey", // username is not a known property in the type "User" and will give an error
//     id: 0,
// }

// TypeScript supports classes and object-oriented programming. You can use an interface declaration with classes:
class UserAccount {
    name: string
    id: number

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
}

const user: User = new UserAccount('murphy', 1)

// // use interfaces to annotate parameters and return values to functions:
// function getAdminUser(): User {
//     // ...
// }

function deleteUser(user: User) {
    // ...
}

// Composing types
// w/ ts we can create complex types by combining simple ones, two popular ways are with Unions and with Generics

// Unions, you can declare that a type could be one of many types
type MyBool = true | false

// ued to describe the set of strings or numbers literal that a value is allowed to be
type WindowStates = 'open' | 'closed' | 'minimized'
type LockStates = 'locked' | 'unlocked'
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9

// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
function getLength(obj: string | string[]) {
    return obj.length
}

// use typeof to learn the type of a variable, you can make a function return different values depending on type

// Generics, provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.
type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>

// You can declare your own types that use generics:
interface Backpack<Type> {
    add: (obj: Type) => void
    get: () => Type
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get()

// // Since the backpack variable is a string, you can"t pass a number to the add function.
// backpack.add(23);

// Structural Type System
// ts principle: type checking focuses on the shape values have, called "structural"/"duck" typing
interface Point {
    x: number
    y: number
}

function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`)
}

// prints "12, 26"
const point = { x: 12, y: 26 }
printPoint(point)
// The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

// shape-matching only requires a subset of the object’s fields to match.
const point3 = { x: 12, y: 26, z: 89 }
printPoint(point3) // prints "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 }
printPoint(rect) // prints "33, 3"

const color = { hex: '#187ABF' }
// printPoint(color); --> "Argument of type "{ hex: string; }" is not assignable to parameter of type "Point". Type "{ hex: string; }" is missing the following properties from type "Point": x, y"

// There is no difference between how classes and objects conform to shapes:
class VirtualPoint {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

const newVPoint = new VirtualPoint(13, 56)
printPoint(newVPoint) // prints "13, 56"
// If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.

export {}
