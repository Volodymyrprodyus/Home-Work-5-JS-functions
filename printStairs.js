// A function which prints the stair picture of size n


function printStairs(n) { 
    let result='';
    for (let index = 0; index < n; index++) {
     result+='#';
     console.log(result);   
    }
    return result;
 }


printStairs(3);