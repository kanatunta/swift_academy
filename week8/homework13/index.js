const assert = (condition, message) => {
    if (!condition) {
        throw Error(message);
    }
};

const checkIsNumber = checkIput => {
    const resultIsNumber = document.getElementById('resultIsNumber');
    const result = checkIput && !isNaN(checkIput) ? true : false;
    resultIsNumber.value = `Is "${checkIput}" number? ${result}`;
    clearInputField();
    return result;
};

const clearInputField = () => {
    document.getElementById('inputNumber').value = '';
};

const clearResultField = () => {
    document.getElementById('resultIsNumber').value = '';
};

const pressButtonTaskOne = () => {
    const inputNumber = document.getElementById('inputNumber').value;
    checkIsNumber(inputNumber);
};

//test Task1
console.log(`test Task 1- Check "123" ${checkIsNumber('123')}`);
console.log(`test Task 1- Check "ball" ${checkIsNumber('ball')}`);
console.log(`test Task 1- Check "" ${checkIsNumber('')}`);

assert(
    checkIsNumber('123') === true,
    "error assertion , expected value 'true'"
);
assert(
    checkIsNumber('ball') === false,
    "error assertion , expected value 'false'"
);
assert(checkIsNumber('') === false, "error assertion , expected value 'false'");

const getStringOne = () => {
    return document.getElementById('stringOne').value;
};

const getStringTwo = () => {
    return document.getElementById('stringTwo').value;
};

const pressButtonTaskTwo = () => {
    countDiffranceBetweenTwoStrings(getStringOne(), getStringTwo());
};

const clearResultDiffranceLenght = () => {
    document.getElementById('resultDiffranceLenght').value = '';
};

const countDiffranceBetweenTwoStrings = (stringOne, stringTwo) => {
    const diffance = Math.abs(stringOne.length - stringTwo.length);
    document.getElementById('resultDiffranceLenght').value = diffance;
    return diffance;
};

//test Task2
console.log(
    `test Task 2- Check "123" and "123" ${countDiffranceBetweenTwoStrings(
        '123',
        '123'
    )}`
);
console.log(
    `test Task 2- Check "123" and "1234" ${countDiffranceBetweenTwoStrings(
        '123',
        '1234'
    )}`
);
console.log(
    `test Task 2- Check "1234" and "123" ${countDiffranceBetweenTwoStrings(
        '1234',
        '123'
    )}`
);

assert(
    countDiffranceBetweenTwoStrings('1234', '123') === 1,
    'error assertion, expected 1'
);
assert(
    countDiffranceBetweenTwoStrings('123', '1234') === 1,
    'error assertion, expected 1'
);
assert(
    countDiffranceBetweenTwoStrings('123', '123') === 0,
    'error assertion, expected 0'
);

//Task 3
const area = (a, b, c) => {
    return (a * (c - b)) / 2 + a * b;
};

console.log(
    `test Task 3- Check area(10,6,10) = ${area(10, 6, 10)}, expected 80`
);
console.log(`test Task 3- Check area(2,1,3) = ${area(2, 1, 3)}, expected 4`);

assert(area(10, 6, 10) === 80, 'error assertion , expected result 80');
assert(area(2, 1, 3) === 4, 'error assertion , expected result 4');
