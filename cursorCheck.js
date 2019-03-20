// A function which returns true if string 
// contains ironman or cursor or ostap otherwise 
// returns false. The function must be case-insensitive.


// function cursorCheck(str) {
//     let strCheck = str.toLowerCase();
//     let strCheckItem1 = strCheck.includes("ostap");
//     let strCheckItem2 = strCheck.includes("ironman");
//     let strCheckItem3 = strCheck.includes("cursor");
//       if(strCheckItem1 || strCheckItem2 || strCheckItem3){
//        return console.log(strCheckItem1 || strCheckItem2 || strCheckItem3);
//      }   
//       else {
//       return console.log(strCheckItem1 || strCheckItem2 || strCheckItem3);
//      }
//     }



    function cursorCheck(str) {
      let strCheck = str.toLowerCase();
      let strCheckItem1 = strCheck.includes("ostap");
      let strCheckItem2 = strCheck.includes("ironman");
      let strCheckItem3 = strCheck.includes("cursor");
      return console.log(strCheckItem1 || strCheckItem2 || strCheckItem3); 
      }


cursorCheck('Hello I am OstaP') // true
cursorCheck('Superman is here') // false