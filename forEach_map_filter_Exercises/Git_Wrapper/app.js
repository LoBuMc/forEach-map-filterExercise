

function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val) {
        newArr.push(val * 2);
    });
    return newArr;
}

function onlyEvenValuess(arr) {
    let newArr = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

function showFirstAndLast(arr) {
    let newArr = [];

    arr.forEach(function(val, index) {
        if (index === 0 || index === arr.length - 1) {
            newArr.push(val);
        }
    });

    return newArr;
}

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

function vowelCount(str) {
    let count = {};
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    Array.from(str).forEach(function(char) {
        if (vowels.includes(char)) {
            if (count[char]) {
                count[char]++;
            } else {
                count[char] = 1;
            }
        }
    });

    return count;
}


function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

function valTimesIndex(arr) {
   return arr.map(function(val, idx) {
        return val * idx;
    });
}

function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
}

function extractFullName(arr) {
    return arr.map(function(val) {
        return val.first + " " + val.last;
    });
}

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key];
    });
}

function find(arr, searchVal) {
    return arr.filter(function(val){
        return val === searchVal;
    });
}

function findInObj(arr, key, searchVal) {
    return arr.filter(function(val) {
        return val[key] === searchVal;
    });
}

function removeVowels(str){
    const vowels = "aeiou";
    return str
    .split('')
    // filter iterates over characters in string, checking if they are not vowels. I like the arrow functions :)
    .filter(char => !vowels.includes(char.toLowerCase()))
    .join('')
    .toLowerCase();
}

function doubleOddNumbers(arr) {
    return arr
    .filter(num => num % 2 !== 0)
    .map(num => num * 2);
}