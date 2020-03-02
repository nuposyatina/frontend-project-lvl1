import play from '../play';
import getRandomNumber from '../lib/getRandomNumber';
import isPrime from '../lib/isPrime';

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const getQuestion = () => {
  const MIN_NUMBER_VALUE = 1;
  const MAX_NUMBER_VALUE = 100;
  const number = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
  const result = getCorrectAnswer(number);
  return {
    text: `${number}`,
    result,
  };
};

export default (name) => play(name, getQuestion);
