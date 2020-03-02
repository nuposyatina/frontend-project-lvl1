import play from '../play';
import getRandomNumber from '../lib/getRandomNumber';

const getQuestionText = (progression, missedIndex) => [...progression.slice(0, missedIndex), '..', ...progression.slice(missedIndex + 1)].join(' ');

const getProgression = (length) => {
  const MIN_NUMBER_VALUE = 1;
  const MAX_NUMBER_VALUE = 100;
  const start = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
  const step = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    const lastElement = progression[progression.length - 1];
    const newElement = lastElement + step;
    progression.push(newElement);
  }
  return progression;
};

const getQuestion = () => {
  const PROGRESSION_LENGTH = 10;
  const MIN_INDEX = 0;
  const MAX_INDEX = PROGRESSION_LENGTH - 1;
  const progression = getProgression(PROGRESSION_LENGTH);
  const missedIndex = getRandomNumber(MIN_INDEX, MAX_INDEX);
  const text = getQuestionText(progression, missedIndex);
  return {
    text,
    result: progression[missedIndex],
  };
};

export default (name) => play(name, getQuestion);
