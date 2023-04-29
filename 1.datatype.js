// string
// anything inside '', "" or ``

// number
// examples: 1, 1.1, -1, -1.1, Infinity, -Infinity or NaN 
// (lets keep things simple and just use the regulars numbers for now)

// Boolean
// true false

// null
// let b = null
// console.log(b)


// undefined
// let a;
// console.log(a)


//console log a string, number, boolean, null and undefined
console.log('hello world')
console.log(123)
console.log(false)
console.log(null)
console.log(undefined)


console.log('hello world', 123, false, null, undefined)
let a = 'hello world'
let b = 123
let c = false
let d = null
let e = undefined
console.log(a,b,c,d,e)


// A variable can hold any primitive values or objects (we will get to them latter in the cohort)
// A variable name can be made up of letters, numbers and some characters (like _ and $). 
// It cannot start with a number. It is capable of holding any kind of data.

let z;
let y ='y'
let x = 1


// ====================================================
// Object
// are surrounded by curly braces {}.
// contains key/value pairs.
// Keys and values are separated by a colon.
let obj = {
    animal: 'dog',
    name: 'spike',
    age: 1,
    abilities: ['bubble blast', 'lickem','tackle'],
    ishuman: false, 
}

console.log(
    obj.animal,
    obj['animal'],
)





// ====================================================
// An array is represented with square brackets [] and each item (otherwise known as element) is separated by commas.
// The elements have an order that starts at 0.
let arr = [1, 2, 3, 4, 5]

let arrTwo = [
    100, 
    'hello world',
    false,
    null, 
    { name: 'spike'}
]

console.log(arrTwo[1])


// ====================================================

const winston = 'Winston';
let issac = 'issac c'
issac = 'issac a'


// let const  |||||||||||||| var

// var was function scoped 

// let and const block scope { }

// ====================================================


console.log(typeof '1')
console.log(typeof 1)
