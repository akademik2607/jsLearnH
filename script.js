let num = 266219;
num = 266219 + '';
let result = 1;
for(let i = 0; i < num.length; ++i){
    result *= +num[i];
}
console.log(result);
console.log(result **= 3);
result = result.toString();

console.log(result.slice(0, 2));
