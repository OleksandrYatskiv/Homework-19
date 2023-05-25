let testArray = [2, 4, 6, 'g', 8, 'wefdxz', 10];

function calculateAverage(array) {
    let average = temp = 0;

    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            average += array[i];
            temp++;
        }

    }
    return average / temp;
}

console.log('First task output :');
console.log(calculateAverage(testArray));

let x, y, znak;

do {
    x = prompt('Please enter a first number : ');
} while (isNaN(x));

do {
    znak = prompt('Please enter an action : (+, -, *, /, %, ^)');
} while (znak !== '+' && znak !== '-' && znak !== '*' && znak !== '/' && znak !== '%' && znak !== '^');

do {
    y = prompt('Please enter a second number : ');
} while (isNaN(x));

function doMath(x, znak, y) {
    let result;

    if (znak === '+') return result = +x + +y;
    if (znak === '-') return result = x - y;
    if (znak === '/') return result = x / y;
    if (znak === '*') return result = x * y;
    if (znak === '%') return result = x % y;
    if (znak === '^') return result = Math.pow(x, y);
}

let result = doMath(x, znak, y);

console.log('Second task output :');
console.log(`The result is ${result}`);


let arrayLength;
let subArrayLength = [];

do {
    arrayLength = prompt('Please enter an array length');
} while (isNaN(arrayLength) || arrayLength <= 0);

for (let i = 0; i < arrayLength; i++) {
    do {
        subArrayLength[i] = prompt(`Enter subarray ${i + 1} length`)
    } while (isNaN(subArrayLength[i]) || subArrayLength[i] <= 0);

}

function fillArray(arrayLength, subArrayLength) {
    let array = [];

    for (let i = 0; i < arrayLength; i++) {
        let subArray = [];

        for (let j = 0; j < subArrayLength[i]; j++) {

            subArray[j] = prompt(`Enter subarray${i+1} ${j + 1} element`);

        }

        array[i] = subArray;
    }

    return array;
}

let array = fillArray(arrayLength, subArrayLength);

console.log('Third task output :');
console.log(array);

console.log('Fourth task output :');

let row = prompt('Enter your row');
let rowToBeDeleted = prompt('Enter symbols to delete');

if (!row) console.log('The row is empty!'); 
if (!rowToBeDeleted) console.log('No symbols entered!'); 

function deleteSymbols(row, rowToBeDeleted){
    rowToBeDeleted = rowToBeDeleted.split('');
    row = row.split('');

    for (let i = 0; i < rowToBeDeleted.length; i++) {
        if (row.indexOf(rowToBeDeleted[i]) !== -1) {
            row.splice(row.indexOf(rowToBeDeleted[i]),1);
        } else {
            return false;
        }
    }
    return row.join('');
}

let resultRow;

if (!deleteSymbols(row, rowToBeDeleted)) {
    console.log('Symbol is not found!');
} else {
    resultRow = deleteSymbols(row, rowToBeDeleted);
    console.log(resultRow);
}