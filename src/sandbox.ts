// Types
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;

// character = 'luigi';
// age = 40;

// isBlackBelt = true;
// console.log(character);

// const inputs = document.querySelectorAll('input');

// console.log(inputs)

// inputs.forEach(input => {
//     console.log(input);
// });
// const circ = (diameter:number) => {
//     return diameter * Math.PI;
// }
// console.log(circ(7.5))
 
// Arrays
// let names = ['luigi', 'mario', 'yoshi']
// names.push('toad')

// let numbers = [10, 20, 30, 40]
//  numbers.push(25)
//  console.log(numbers)
//  console.log(names)

//  let mixed = ['ken', 4, 'chun-li', 8, 9]
//  mixed.push(3)
//  mixed.push('ryu')
//  mixed[0] = 8
//  console.log(mixed)

 //Objects
//  let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
//  };
//  ninja.age = 40;
//  ninja.name = 'ryu'
//  console.log(ninja.belt)

// Explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean

// age = 30;
// isLoggedIn = true

//arrays
//let ninjas: string[];
// ninjas = ['mario' , 'yoshi']
//ninjas.push('shau') you can't do this unless you create ninja array with an empty array 

//let ninjas2: string[] = [] 
//ninjas2.push('shaun') this works since the array is assigned to an empty array


//union types: mixing different types
// let mixed: (string|number|boolean)[] = []
// mixed.push(false)
// mixed.push('hello')
// mixed.push(40)
// console.log(mixed)

//objects
// let ninjaOne: object;
// ninjaOne = {name: 'yoshi', age:30}
// ninjaOne = ['init', 30] this would work too since array is also an object

// specifing a variable to be an object
// let ninjaTwo:{
//     name: string,
//     age: number,
//     beltColour: string
// }

// ninjaTwo = {name: 'mario', age: 20, beltColour:'blue'}


// Function
// let greet: Function;
// //greet = 'hello'
// greet = () => {
//     console.log('hello again')
// }
// to make the parameter optional you add the question mark(c?: number | stri ng) or add a default value 
// const add = (a: number, b: number, c: number | string = 10) => {
// console.log(a+b)// always add the optional parameters at the end otherwise your arguments will get mixed up
// }
// add(5,10) 

// Type alias
// type StringOrNum = string | number
// type objWithName = {name: string, uid: StringOrNum}

// const longDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }
// longDetails(7,'pen')
// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`)
// }
// console.log({
//     name: 'anna',
//     uid: 23
// })

// Function signature
//  const anchor = document.querySelector('a')
 //console.log(anchor.href) // it is showing that the anchor might be possibly null
 // you have to do if conditions for it to work
//  if(anchor){
//     console.log(anchor.href)
//  }  //or if you are sure you have that value you write
// const anchor = document.querySelector('a')!;
// console.log(anchor.href) // there is no error anymore

const form = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form.children)

