import readlineSync from 'readline-sync';

const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

export default (getGameData, rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // у игры brain-games нет вопроса для пользователя и правил игры,
  // она только спрашивает его имя.
  // Поэтому выходим из функции
  if (getGameData === null) return;
  console.log(rules);
  const GAME_ROUNDS_COUNTER = 3;
  for (let i = 1; i <= GAME_ROUNDS_COUNTER; i += 1) {
    const { question, correctAnswer } = getGameData();
    const userAnswer = typeof correctAnswer === 'number' ? +getUserAnswer(question) : getUserAnswer(question);
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
