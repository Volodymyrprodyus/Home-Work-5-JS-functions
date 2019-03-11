// A function that when given a number n returns the n-th number in the Fibonacci Sequence. 
// The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21…



function fibonacci(n) {
    let a = 1;
    let b = 1;
    for (let index = 3; index <= n; index++) {
      let c = a + b;
      a = b;
      b = c;
    }
    console.log(b);
}


fibonacci(3) // 2
fibonacci(5) // 5
fibonacci(7) // 13