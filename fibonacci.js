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