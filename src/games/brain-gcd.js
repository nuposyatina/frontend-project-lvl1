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

const getQuestion = (first, second) => `${first} ${second}`;

const getGcd = (first, second) => {
  const firstDividers = getDividers(first);
  const secondDividers = getDividers(second);
  const smallDividers = first >= second ? secondDividers : firstDividers;
  const bigDividers = first >= second ? firstDividers : secondDividers;
  return Math.max(...bigDividers.filter((el) => smallDividers.includes(el)));
};

const getGameData = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  const question = getQuestion(first, second);
  const correctAnswer = getGcd(first, second);
  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

export default () => play(getGameData, description);
