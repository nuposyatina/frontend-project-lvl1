
import play from '..';
import getRandomNumber from '../lib/getRandomNumber';

const description = 'What is the result of the expression?';
const OPERATIONS = ['+', '-', '*'];
const operationsMap = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};


const getOperation = (ops) => {
  const FIRST_INDEX = 0;
  const LAST_INDEX = ops.length - 1;
  const randomIndex = getRandomNumber(FIRST_INDEX, LAST_INDEX);
  return ops[randomIndex];
};


const getResult = (first, second, operation) => {
  return operationsMap[operation](first, second);
};

const getQuestionText = (first, second, operation) => `${first} ${operation} ${second}`;

const getGameData = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  const operation = getOperation(OPERATIONS);
  const questionText = getQuestionText(first, second, operation);
  const correctAnswer = getResult(first, second, operation);
  return {
    question: questionText,
    correctAnswer,
  };
};

export default () => play(getGameData, description);
