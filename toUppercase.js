function toUppercase(str) { 
    let res = str.toUpperCase();
    return res;
 }

console.log(toUppercase('abc')); // 'ABC'



function toUppercaseimprove(str) {
    let res = '';
    for(let index = 0; index <= str.length-1; index++){
        res += String.fromCharCode(str.charCodeAt(index)-32);
    }
    return res;
  }
  console.log(toUppercaseimprove('fbi'));