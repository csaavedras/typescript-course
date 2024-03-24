// Challenge 3

// - [x] Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
let temperatures: number[] = [30, 25, 17]
// temperatures.push('20') // Error: Type 'string' is not assignable to type 'number'

// - [x] Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
let colors: string[] = ['red', 'green', 'blue']
// colors.push(true) // Error: Type 'boolean' is not assignable to type 'string'

// - [ ] Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
let mixedArray: (number | string)[] = [1994, 'Camilo', 2015, 'Agustin']
// mixedArray.push(true) // Error: Type 'boolean' is not assignable to type 'number