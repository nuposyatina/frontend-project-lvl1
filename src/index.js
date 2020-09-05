import readlineSync from 'readline-sync';

const GAME_ROUNDS_COUNTER = 3;
const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

export default (getGameData, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 1; i <= GAME_ROUNDS_COUNTER; i += 1) {
    const { question, correctAnswer } = getGameData();
    const userAnswer = getUserAnswer(question);
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
