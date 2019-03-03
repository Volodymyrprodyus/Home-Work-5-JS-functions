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