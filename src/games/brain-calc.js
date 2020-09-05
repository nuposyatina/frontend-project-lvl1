
import play from '..';
import getRandomNumber from '../lib/getRandomNumber';

const description = 'What is the result of the expression?';
const operationsMap = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};
const OPERATIONS = Object.keys(operationsMap);


const getRandomOperation = (operations) => {
  const FIRST_INDEX = 0;
  const LAST_INDEX = operations.length - 1;
  const randomIndex = getRandomNumber(FIRST_INDEX, LAST_INDEX);
  return operations[randomIndex];
};


const calculate = (first, second, operation) => operationsMap[operation](first, second);

const getQuestion = (first, second, operation) => `${first} ${operation} ${second}`;

const getGameData = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  const operation = getRandomOperation(OPERATIONS);
  const questionText = getQuestion(first, second, operation);
  const correctAnswer = calculate(first, second, operation);
  return {
    question: questionText,
    correctAnswer: correctAnswer.toString(),
  };
};

export default () => play(getGameData, description);
