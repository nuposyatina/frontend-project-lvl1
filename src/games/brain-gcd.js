import play from '../play';
import getQuestionNumbers from '../lib/getQuestionNumbers';
import getDividers from '../lib/getDividers';

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

export default (name) => play(name, getQuestion);
