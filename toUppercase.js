// A function which returns a string with all letters in uppercase (without built in string’s method).
//  The function supports only english alphabet.


// function toUppercase(str) { 
//     let res = str.toUpperCase();
//     return res;
//  }

// console.log(toUppercase('abc')); // 'ABC'



function toUppercase(str) {
    let upperLetter = '';
    for(let i = 0; i < str.length; i++){
        let charAt = str.charCodeAt(i);
        if (charAt >= 97 && charAt <= 122) {
            upperLetter += String.fromCharCode(str.charCodeAt(i)-32);
        }
        else {
            upperLetter += String.fromCharCode(charAt);  
        }
        
    }
    return upperLetter;
  }
  console.log('toUppercase ', toUppercase('abc123'));

