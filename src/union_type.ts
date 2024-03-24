// Union Type 
let tax: number | string = 10
tax = 100;
tax = '10%'

let requestStatus: 'pedding' | 'success' | 'error' = 'pedding'
requestStatus = 'error'
requestStatus = 'success'

// Type - "any"

let notSure: any = 5
notSure = 'maybe a string instead'
notSure = false


// Practical Application of Type Annotation

const books = ['1994', 'Brave New World', 'Fahrenheit 451']

let foundBooks: string | undefined

for (let book of books) {
    if (book === '1994') {
        foundBooks = book
        foundBooks = foundBooks.toUpperCase()
        break
    }
}
console.log(foundBooks?.length);

// Challenge

// - [x] Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
orderStatus = 'shipped'
orderStatus = 'delivered'
// orderStatus = 'error'

// - [ ] Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.
let discount: number | string = 20
discount = '20%'
// discount = false  // Type 'boolean' is not assignable to type 'number | string'