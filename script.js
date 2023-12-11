function getNumber(promptText) {
  return parseInt(prompt(promptText));
}

const firstNumber = getNumber('Please enter the first number');
const secondNumber = getNumber('Please enter the second number');

const sum = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber / secondNumber;

alert(`
  ${firstNumber} + ${secondNumber} = ${sum} \n
  ${firstNumber} - ${secondNumber} = ${difference} \n 
  ${firstNumber} * ${secondNumber} = ${product} \n 
  ${firstNumber} / ${secondNumber} = ${quotient}`
);

