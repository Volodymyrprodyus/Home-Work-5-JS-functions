function firstAndLastToUpper(str) {
    let str2 = str[0].toUpperCase() + str.slice(1, str.length-1) + str[str.length-1].toUpperCase();
    console.log(str2);
}

firstAndLastToUpper('abc');