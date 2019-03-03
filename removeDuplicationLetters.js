function removeDuplicationLetters(str) { 
    let res="";
	for(let index=0; index < str.length; index++) {
		if(res.indexOf(str.charAt(index))==-1 || str.charAt(index) == ' ') {
		res += str[index];
		}
	}
  console.log(res);
} 

removeDuplicationLetters('Hello I am Iron Man') // 'Helo I am rn '