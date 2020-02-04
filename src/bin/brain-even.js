#!/usr/bin/env node
import askName from '..';
import play from '../games/brain-even';
import sayWelcome from '../welcome';

sayWelcome();
const userName = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
play(userName);
