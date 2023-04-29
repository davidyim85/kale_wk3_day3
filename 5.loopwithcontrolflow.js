//basic for loop


for(let i=0; i<10; i++){
    console.log(i)
}

// starting at 0
// im going to 9
// after every stop im going to add 1 to i
// and in my journey from 0 - 9 
// im going to console.log(i)


for(let i=0; i<=10; i++){
    console.log('going to annoy ' + i + ' time(s)');
}


//YOU DO: give me a loop that starts at 1 and logs i 10 times.
for (let i = 1; i < 11; i++){
    console.log(`I logged i ${i} times`)
}

//=======================================================================================


for(let i=0;i<11; i++){
    console.log(i, i % 2 === 0)
    if(i % 2 === 0){
        console.log(i)
    }
}



//=======================================================================================

let count = 0;
for(let i=0; i<=10; i++){
    //if the i is EVEN
    if(i % 2 === 0){
        // add i to the current value of count
        count = count + i   
    }
}

console.log(count)


let countTwo = 0;
for(let i=0; i<=10; i++){
    // add i to the current value of countTwo
    countTwo = countTwo + i   
}
console.log(countTwo)