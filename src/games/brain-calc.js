
import play from '../play';
import getRandomNumber from '../lib/getRandomNumber';


const getOperation = (ops) => {
  const randomIndex = getRandomNumber(0, ops.length - 1);
  return ops[randomIndex];
};


const getResult = (first, second, operation) => {
  const operations = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
  };
  return operations[operation](first, second);
};

const getQuestionText = (first, second, operation) => `${first} ${operation} ${second}`;

const getQuestion = () => {
  const MIN_NUMBER_VALUE = 1;
  const MAX_NUMBER_VALUE = 100;
  const OPERATIONS = ['+', '-', '*'];
  const first = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
  const second = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
  const operation = getOperation(OPERATIONS);
  const questionText = getQuestionText(first, second, operation);
  const result = getResult(first, second, operation);
  return {
    text: questionText,
    result,
  };
};

export default (name) => play(name, getQuestion);
