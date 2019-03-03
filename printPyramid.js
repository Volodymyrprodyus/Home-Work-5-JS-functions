function printPyramid(n){
	for(let index = 0; index < n; index++) {
          let res = '';
          let resh = '##';
		    for(let i = 0; i < n-index; i++) {
		        res+= ' ';
		    }
		    for(let j = 0 ; j <= index; j++) {    
		       res+= '# ';
		    }
		    console.log(res);  
	}
}
printPyramid(3);