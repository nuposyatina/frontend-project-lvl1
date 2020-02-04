import readlineSync from 'readline-sync';

export default (text) => readlineSync.question(`Question: ${text}\nYour answer: `);
