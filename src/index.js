import readlineSync from 'readline-sync';

const sayWelcome = () => console.log('Welcome to the Brain Games!');

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const sayRules = (rules) => console.log(rules);

const getUserAnswer = (text) => readlineSync.question(`Question: ${text}\nYour answer: `);

export default (getQuestion, rules) => {
  sayWelcome();
  const name = askName();
  // у игры brain-games нет вопроса для пользователя и правил игры,
  // она только спрашивает его имя.
  // Поэтому выходим из функции
  if (getQuestion === null) return;
  sayRules(rules);
  const GAME_ROUNDS_COUNTER = 3;
  for (let i = 1; i <= GAME_ROUNDS_COUNTER; i += 1) {
    const { text, result } = getQuestion();
    const userAnswer = typeof result === 'number' ? +getUserAnswer(text) : getUserAnswer(text);
    if (userAnswer !== result) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
