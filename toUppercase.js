// A function which returns a string with all letters in uppercase (without built in string’s method).
//  The function supports only english alphabet.


// function toUppercase(str) { 
//     let res = str.toUpperCase();
//     return res;
//  }

// console.log(toUppercase('abc')); // 'ABC'



function toUppercase(str) {
    let res = '';
    for(let index = 0; index <= str.length-1; index++){
        res += String.fromCharCode(str.charCodeAt(index)-32);
    }
    return res;
  }
  console.log(toUppercase('abc'));