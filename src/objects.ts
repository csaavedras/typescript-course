let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 }
car.brand = 'ford'
// car.color = 'blue';

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 }
// let car2: { brand: string; year: number } = { brand: 'audi' };

let book = { title: 'book', cost: 20 }
let pen = { title: 'pen', cost: 5 }
let notebook = { title: 'notebook' }

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook]

// items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property

// Challenge
// - [ ] Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
let bike: { brand: string; year: number } = { brand: 'Oxford', year: 2023 }
// bike.year = 'twenty twenty three'; // Error: Type 'string' is not assignable to type 'number'

// - [ ] Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
let laptop: { brand: string; year: number } = { brand: 'Apple' } // Error: Type '{ brand: string; }' is missing the following properties

// - [ ] Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.
let products: { title: string; price: number }[] = [
  {
    title: 'iphone',
    price: 3000
  },
  {
    title: 'macbook',
    price: 5000
  },
//   {
//     title: 'appleWatch',
//     price: 'Two Hundrent' 
//   }
]
