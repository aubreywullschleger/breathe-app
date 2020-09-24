// // to create an object with an inferred type which includes name: string and id: number, you can write:
// const user = {
//   name: 'aubrey',
//   id: 0
// }

// explicitly describe this object’s shape using an interface declaration:
interface User {
    name: string
    id: number
}

// // then declare that a JavaScript object conforms to the shape of your new interface by using syntax like `: TypeName` after a variable declaration:
// const user: User = {
//     name: 'aubrey',
//     id: 0,
// }

// // If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:
// const user: User = {
//     username: 'aubrey', // username is not a known property in the type 'User' and will give an error
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

// use interfaces to annotate parameters and return values to functions:
function getAdminUser(): User {
    // ...
}

function deleteUser(user: User) {
    // ...
}
