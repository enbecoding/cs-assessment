const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

//Results for tinyArray: insert 78.5 μs | append 185.2 μs
//Results for smallArray: insert 87.6 μs | append 181.9 μs
//Results for mediumArray: insert 396 μs | append 322.9 μs
//Results for largeArray: insert 23.1211 ms | append 1.3236 ms
//results for extraLargeArray: insert 1.3204255 s | append 6.2797 ms

/* 
By the results, whereas the append function in the tiny and small arrays take fractionally longer than insert, as the number of items in the array grows the insert function begins to take a longer time meaning the append function scales better. I believev the push function is quicker because with unshift, we have to loop through every single item in the array. This means that with unshift, given a larger number of items in an array, we must perform the same action n number of times. This is because with unshift it also needs to unshift all the elements to the left once the first element is added. 
*/