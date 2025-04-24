function add7(num1) {
  return num1 + 7;
}

let result = add7(5);
console.log(result);

function multiply(oneNum, twoNum) {
  return oneNum * twoNum;
}
let product = multiply(4, 4);
console.log(product);

function capital(name) {
  return String(name).charAt(0).toUpperCase() + String(name).slice(1);
}
let cap = capital("john");
console.log(cap);

function lastLetter(last){
    return String(last).charAt(3);
}
let char = lastLetter("abcd");
console.log(char);

