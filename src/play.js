import getUserAnswer from './lib/getUserAnswer';

export default (name, getQuestion) => {
  const GAME_ROUNDS_COUNTER = 3;
  for (let i = 1; i <= GAME_ROUNDS_COUNTER; i += 1) {
    const { text, result } = getQuestion();
    const userAnswer = +getUserAnswer(text);
    if (userAnswer !== result) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
