import play from '..';
import getRandomNumber from '../lib/getRandomNumber';

const MIN_NUMBER_VALUE = 1;
const MAX_NUMBER_VALUE = 100;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const number = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return {
    question: number.toString(),
    correctAnswer,
  };
};

export default () => play(getGameData, description);
