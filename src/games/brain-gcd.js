import play from '..';
import getRandomNumber from '../lib/getRandomNumber';

const description = 'Find the greatest common divisor of given numbers';

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

const getGameData = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  const question = getQuestionText(first, second);
  const correctAnswer = getResult(first, second);
  return {
    question,
    correctAnswer,
  };
};

export default () => play(getGameData, description);
