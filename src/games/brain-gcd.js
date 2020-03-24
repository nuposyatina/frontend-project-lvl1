import play from '..';
import getQuestionNumbers from '../lib/getQuestionNumbers';

const RULES = 'Find the greatest common divisor of given numbers';

const getDividers = (num) => {
  const dividers = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) dividers.push(i);
  }
  return dividers;
};

const getQuestionText = (first, second) => `${first} ${second}`;

const getResult = (first, second) => {
  const firstDividers = getDividers(first);
  const secondDividers = getDividers(second);
  const smallDividersArray = first >= second ? secondDividers : firstDividers;
  const bigDividersArray = first >= second ? firstDividers : secondDividers;
  return Math.max(...bigDividersArray.filter((el) => smallDividersArray.includes(el)));
};

const getQuestion = () => {
  const { first, second } = getQuestionNumbers();
  const text = getQuestionText(first, second);
  const result = getResult(first, second);
  return {
    text,
    result,
  };
};

export default () => play(getQuestion, RULES);
