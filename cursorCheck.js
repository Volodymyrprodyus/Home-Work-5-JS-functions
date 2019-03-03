function cursorCheck(str) {
    let res = str.toLowerCase();
      if(res.includes("ostap") || res.includes("ironman") || res.includes("cursor")){
      console.log('true');
     }   
      else {
      console.log('false');
     }
    }
cursorCheck('Hello I am OstaP') // true
cursorCheck('Superman is here') // false