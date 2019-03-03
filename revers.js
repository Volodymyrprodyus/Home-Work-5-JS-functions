function reverse(str) { 
 let result1 = '';
 for (let index = str.length-1; index >= 0; index--) {
  result1+=str[index];    
 }  
 return result1;  
}




console.log (reverse('bca') ); // 'cba'