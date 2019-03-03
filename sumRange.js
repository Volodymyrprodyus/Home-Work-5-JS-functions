function sumRange(start, end) { 
let result=start;
for (let index = 0; index < end-start; index++) {
 result=result+(end-index);     
}
return result;
}
console.log(sumRange(2, 4)); // 9
console.log(sumRange(-1, 3)); // 5