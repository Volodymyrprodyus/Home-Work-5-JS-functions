// A function which transforms first and last letter to uppercase (use built in string’s method).



function firstAndLastToUpper(str) {
    const str2 = str[0].toUpperCase() + str.slice(1, str.length-1) + str[str.length-1].toUpperCase();
    console.log(str2);
}

firstAndLastToUpper('abc');