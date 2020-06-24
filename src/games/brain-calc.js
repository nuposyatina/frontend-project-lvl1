
import play from '..';
import getRandomNumber from '../lib/getRandomNumber';
import getQuestionNumbers from '../lib/getQuestionNumbers';

const description = 'What is the result of the expression?';


const getOperation = (ops) => {
  const FIRST_INDEX = 0;
  const LAST_INDEX = ops.length - 1;
  const randomIndex = getRandomNumber(FIRST_INDEX, LAST_INDEX);
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
  const OPERATIONS = ['+', '-', '*'];
  const { first, second } = getQuestionNumbers();
  const operation = getOperation(OPERATIONS);
  const questionText = getQuestionText(first, second, operation);
  const correctAnswer = getResult(first, second, operation);
  return {
    question: questionText,
    correctAnswer,
  };
};

export default () => play(getQuestion, description);
