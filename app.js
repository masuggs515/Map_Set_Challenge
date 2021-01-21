// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if 
// that array contains a duplicate


const hasDuplicate = arr => arr.length !== new Set(arr).size;


// Write a function called vowelCount which accepts a string and returns a map where the keys are 
// numbers and the values are the count of the vowels in the string.

const vowelCount = str => {
    const vowelMap = new Map();
    for(let letter of str){
        letter = letter.toLowerCase();
        if('aeiou'.includes(letter)){
            if(vowelMap.has(letter)){
                vowelMap.set(letter, vowelMap.get(letter) +1)
            }else{
                vowelMap.set(letter, 1)
            }
        }
    }
    return vowelMap;
}

