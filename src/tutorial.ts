console.log('Hello');

// - [x] Create a variable of type string and try to invoke a string method on it.

let myName: string = 'Camilo'
myName = myName.toUpperCase()
console.log(myName);

// - [x] Create a variable of type number and try to perfom a mathematical operation on it. 
let actualYear: number = 2024
actualYear = actualYear - 1994
console.log(actualYear);

// - [x] Create a variable of type boolean and try to perfom a logical operation on it. 
let isGreaterThan: boolean = true
if ( 10 > 5) {
    isGreaterThan = true
} else {
    isGreaterThan = false
}

// - [x] Try to assign a value of a different type to each of these vatiables and observe the Typescript compilar's response. 

// Type 'number' is not assignable to type 'string'.ts(2322)
// Type 'string' is not assignable to type 'number'.ts(2322)
// Type 'number' is not assignable to type 'boolean'.ts(2322)

// - [x] Try to assign a value of a different type to each of these vatiables and observe the Typescript compilar's response. 

// myName = 200
// actualYear = "Hello"
// isGreaterThan = 200