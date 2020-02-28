import getRandomNumber from './getRandomNumber';

export default () => {
  const MIN_NUMBER_VALUE = 1;
  const MAX_NUMBER_VALUE = 100;
  const first = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
  const second = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
  return { first, second };
};
