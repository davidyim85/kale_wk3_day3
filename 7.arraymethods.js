

// THESE METHODS CAN ONLY BE USED AGAINST ARRAY

const beasts = ['ant', 'bison', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts)
// indexOf
// return the first index at which the match presents itself

// console.log(
//     beasts.indexOf('bison') //1
// )

// console.log(
//     beasts.indexOf('mbison') //-1 (bvecause it doesnt exist in the array)
// )

//========================================

// push
// the push method adds to the END of an array
// MUTATION
// beasts.push('cow')
// console.log(beasts)


//========================================

// pop
// the pop methods removes the last element from the array
// MUTATION
// beasts.pop()
// console.log(beasts)



//========================================

// reverse
//the revsere method resrve an array in place. 
// the frist becomes the last and so forth
// MUTATION
// beasts.reverse()
// console.log(beasts)

//========================================

// unshift
// the unshift adds the specifed menets to the beginning of an array
// MUTATION
// beasts.unshift('dog', 'cat', 'hamster')
// console.log(beasts)

//========================================

// shift 
// shift removes the first element in the array
// MUTATION
// beasts.shift()
// console.log(beasts)

//========================================

// splice
// splice method chagnes the content of any array by removing OR REPLACING elements
// MUTATION
// beasts.splice(3, 0, 'cow')
// console.log(beasts)

//========================================

// sort 
// sort using ASCII by default
// MUTATION
//advanced 
// BUT if you pass in a call back we can make things sort based on that call back function
// const months = ['march', 'March', 'jan', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);


// const arrayOne = [1, 30, 4, 21, 100000];
// arrayOne.sort();
// console.log(arrayOne);



// const arrayTwo = [1, 30, 4, 21, 100000];
// arrayTwo.sort((a,b) => a - b );

// console.log(arrayTwo)

//========================================

// slice
// return a shallow copy of a portion of an array specified from the start and end (not inclusive of the end)

// const beastsTwo = beasts.slice(2,4);
// console.log(beasts)
// console.log(beastsTwo)