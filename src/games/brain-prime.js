import play from '..';
import getRandomNumber from '../lib/getRandomNumber';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const getQuestion = () => {
  const MIN_NUMBER_VALUE = 1;
  const MAX_NUMBER_VALUE = 100;
  const number = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
  const correctAnswer = getCorrectAnswer(number);
  return {
    question: `${number}`,
    correctAnswer,
  };
};

export default () => play(getQuestion, description);
