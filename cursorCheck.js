// A function which returns true if string 
// contains ironman or cursor or ostap otherwise 
// returns false. The function must be case-insensitive.


function cursorCheck(str) {
    let res = str.toLowerCase();
    let res1 = res.includes("ostap");
    let res2 = res.includes("ironman");
    let res3 = res.includes("cursor");
      if(res1 || res2 || res3){
      console.log(res1 || res2 || res3);
     }   
      else {
      console.log(res1 || res2 || res3);
     }
    }
cursorCheck('Hello I am OstaP') // true
cursorCheck('Superman is here') // false