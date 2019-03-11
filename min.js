// Write a function which returns the smallest of three numbers.


function min(a, b, c) { 
  if (a<b && a<c) {
    return a;  
  }
  else if (b<a && b<c) {
     return b;
  }
  else {
    return c;  
  } 
}

console.log(min(10, 5, 11)) // 5
console.log(min(3, 8, 4)) // 3


// Better variant

function minimproved() { 
  return Math.min.apply(null, arguments);
}

console.log(minimproved(10, 5, 11)) // 5
console.log(minimproved(3, 8, 4)) // 3