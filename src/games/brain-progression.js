import play from '..';
import getRandomNumber from '../lib/getRandomNumber';

const PROGRESSION_LENGTH = 10;
const MIN_INDEX = 0;
const MAX_INDEX = PROGRESSION_LENGTH - 1;
const MIN_NUMBER_VALUE = 1;
const MAX_NUMBER_VALUE = 100;
const description = 'What number is missing in the progression?';

const getQuestion = (progression, missedIndex) => [...progression.slice(0, missedIndex), '..', ...progression.slice(missedIndex + 1)].join(' ');

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const newElement = start + i * step;
    progression.push(newElement);
  }
  return progression;
};

const getGameData = () => {
  const firstProgressionElement = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
  const progressionStep = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
  const progression = makeProgression(firstProgressionElement, progressionStep, PROGRESSION_LENGTH);
  const missedIndex = getRandomNumber(MIN_INDEX, MAX_INDEX);
  const question = getQuestion(progression, missedIndex);
  return {
    question,
    correctAnswer: progression[missedIndex].toString(),
  };
};

export default () => play(getGameData, description);
