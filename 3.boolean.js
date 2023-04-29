
// = one equal means im going to set it to that value afterwards
// let name = 'David'


// === checks for equal value and equal type
console.log(1 === 1)

// == checks for equal value 
console.log("1" == 1)


// > greater then check
// >= "greater than or equal" to check
console.log(1 > 1) 
console.log(1 >= 1)

// < less then check
// <= "less than or equal" to check
console.log(-1 < -1) 
console.log(-1 <= -1)

// !== check for NON equality (for type and value)
console.log(1 !== 1)
console.log(1 !== 2)

// != check for NON equality (for value)
console.log(1 != 1)
console.log(1 != 2)
console.log('1' != 1)
console.log('1' != 2)


// ==============================

// lets experiment

console.log(
    1 === 1,
    'beans' === 'Beans',
    (5 + 5 - 3) ===  ((5 + 5) - 3),
    9 === false,
    "A" < "a",
    'Burger King' < 'McDonalds',
    NaN === NaN,
    (5 + 5 * 3) ===  ((5 + 5) * 3),
    "A" > "a",
    'Burger King' > 'McDonalds',
)

// ==============================

// operators that get boolean
// && and 
// true and false -> on AND all need to be true
// || or
// true or false -> on OR only 1 needs to be true



console.log(
    true && true && true && false
)

console.log( false || false || false || true)



console.log(
    true || true || true && false
)


// ==============================

// truthy and falsey

// falsey's are
// 0
// false
// ''
// NaN
// null
// undefined


//truthy is everything thats not a falsey

console.log(true || false)
console.log(null || 'string')

// ==============================


// !! bang
// return the value TRUE or FALSE based on truthy or falsey
