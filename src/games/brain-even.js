import play from '..';
import getRandomNumber from '../lib/getRandomNumber';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

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

export default () => play(getQuestion, RULES);
