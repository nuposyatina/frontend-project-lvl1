import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getUserAnswer = (number) => readlineSync.question(`Question: ${number}\nYour answer: `);

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

export default (name) => {
  const GAME_ROUNDS_COUNTER = 3;
  const MIN_NUMBER_VALUE = 1;
  const MAX_NUMBER_VALUE = 100;
  for (let i = 1; i <= GAME_ROUNDS_COUNTER; i += 1) {
    const currentNumber = getRandomNumber(MIN_NUMBER_VALUE, MAX_NUMBER_VALUE);
    const userAnswer = getUserAnswer(currentNumber);
    const correctAnswer = getCorrectAnswer(currentNumber);
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
