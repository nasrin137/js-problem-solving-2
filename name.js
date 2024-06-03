function celsiusToFahrenheit(celsius) {
    let farenheit = celsius * 9/5 + 32;
    return farenheit
}
let convertedrResult = celsiusToFahrenheit(0);
console.log(convertedrResult);

function  isEven(num){
    if (num % 2 === 0){
        return true;
    }else{
        return false;
    }
}
const result = isEven(4);
console.log(result);

function sum(a, b) {
    let sum = a+ b;
    return sum;
};
const total = sum(3,4);
console.log(total);

function findSmallestNum(arr){
    let smallestNum = Math.min(...arr)
    return smallestNum;
}
let smallestNumResult = findSmallestNum([3,5,1,9]);
console.log(smallestNumResult)

function countVowels(str) {
    let vowels = 'aeiouAEIOU'
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count ++;
        }
    }return count;
};
console.log(countVowels('hello world'));

function getFirstElement(arr){
    let firstElement = arr[0];
    return firstElement;
}

console.log(getFirstElement([1,2,3]));

function isArrayEmpty(arr){
    if(arr.length === 0){
        return true
    }else{
        return false
    }
};
console.log(isArrayEmpty([]));

function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for(let i = 2; i<=num;i++){
        result = result * i;
    }return result
}
console.log(factorialize(5));

function reverseString(str){
    let reverseStr = str.split('').reverse().join('');
    return reverseStr;
}
console.log(reverseString('hello'));

function toLowerCase(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr;
};
console.log(toLowerCase('HELLO WORLD'));

function stringLength(str){
    let length = str.length;
    return length;
};
console.log(stringLength('hello'));

function mergeArrays(arr1, arr2){
    let combinedArr = arr1.concat(arr2);
    return combinedArr;
};
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

function getLastElement(arr){
    let lastElement = arr.at(-1);
    return lastElement;
};
console.log(getLastElement([1,2,3]));

function getFirstCharacter(str) {
    let firstChar = str.charAt(0);
    return firstChar;
};
console.log(getFirstCharacter('hello'));

function sumArray(arr) {
    let sum = 0;
    for(let num of arr){
        sum = sum + num;
    }return sum;
};
console.log(sumArray([-1,-2,-3,-4]))