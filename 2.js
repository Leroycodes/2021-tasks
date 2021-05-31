let string = 'leroy';

function upperCaseString(parameter) {
    let capFirstLetter = parameter.charAt(0).toUpperCase();
    let restOfName = parameter.slice(1);
    return capFirstLetter + restOfName;
}


 let capName1 = upperCaseString(string);
 let capName2 = upperCaseString('sam');
 let capName3 = upperCaseString('lei');
 let capName4 = upperCaseString('seth');
 
console.log(capName1)
console.log(capName2)
console.log(capName3)
console.log(capName4)
