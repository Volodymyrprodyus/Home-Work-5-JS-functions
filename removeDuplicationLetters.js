// A function which removes duplication of letters in string. The function must be case-insensitive.


function removeDuplicationLetters(str) { 
    let res = '';
	for(let index = 0; index < str.length; index++) {
		let temp = res.toLowerCase();
		let char = str[index].toLowerCase();
		if (str[index] === ' ' || !temp.includes(char)) {
		res += str[index];
		}
	}
 return res;
} 

console.log(removeDuplicationLetters('Hello I am Iron Man'));
 // 'Helo I am rn '


 // using reduce

 unique_char = str => str.split('').reduce((s, v) =>
 (!s.toLowerCase().includes(v.toLowerCase()) || v === ' ') ? (s + v) : s);

alert(unique_char("Hello I am Iron Man"));