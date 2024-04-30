const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

// ASCI to 8 bit

// turn str in to an array
// loop throw each element converting it to base 10
// nest loop each pass turning it into base 2
// as we go saving it to a return string??


const asciiTo8bit = str => {
let binaryString = ''
for (i=0;i<str.length;i++){
  const decimal = str.charCodeAt(i)
  let binary = decimal.toString(2)
  binary = addZeros(binary, 8)
  binaryString += binary
}
return binaryString
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001

