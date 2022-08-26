// Sum Zero function
function sumFinder(array, num) {
    let obj = {}
    let diff

    for (let i = 0; i < array.length; i++){
        diff = num - array[i]
        if (obj[diff]) {
            return true;
        } else {
           obj[array[i]] = true;
        }
    } return false
} 

let sumFinderResult = sumFinder ([28, 43, -12, 30, 4, 0, 12], 0)

//runtime is O(n) because the array is being loops through for n number of elements

//Unique Characters Function
const uniqueString = (str) => {
    const setString = new Set(str);
    if (setString.size === str.length)
    {
        return true;
    }  
    else 
    {
        return false;
    }
}
let input = "Okay"

if (uniqueString(input)) {
    console.log("Has all unique characters")
} else {
    console.log("Has duplicate characters")
}

//by using set, it is a runtime of O(1) because sets order data by using keys and each key must be unique

//Pangram Sentence Function
const isPangram = (string) => {
    let alpha = string.toUpperCase().split("");
    for (let beta = 65; beta < 91; beta++) {
      let gamma = String.fromCharCode(beta);
      if (alpha.includes(gamma)) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPangram("Detect Pangram"));
  console.log(isPangram("abcd efgh ijkl mnop qrst uvwx yz"));

//Pangram has a runtime of O(n) because we loop through n number of characters in a given string of multiple words

//Longest Word Function
let findLongestWord = (str) => {
    const words = str.split(' ');
    let longest = 0;
  
    for (var i=0;i<words.length;i++) {
      if (words[i].length > longest) {
        longest = words[i].length;
      }
  
    }
    return longest;
  }

//Longest word function has a runtime of O(n) because like the pangram, the split method is used and is doing linear passes through the input string.