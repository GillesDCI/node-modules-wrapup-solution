const fs = require('fs');
const MathModule = require('./MyModules/MathModule');

require('dotenv').config();

console.log(process.env.TOPSECRET);

console.log("the result of math module addition is: ", MathModule.add(5,4));
console.log("the result of math module subtraction is: ", MathModule.subtract(5,4));
console.log("the result of math module division is: ", MathModule.divide(5,4));
console.log("the result of math module multiplication is: ", MathModule.multiply(5,4));


const data = `I'm writing the result to a text file ${MathModule.add(5,4)}`;

fs.writeFile('test.txt', data,() => { console.log("Done writing file to the disk.")});
