#!/usr/bin/env node
import askName from '..';
import play from '../games/brain-prime';
import sayWelcome from '../welcome';

sayWelcome();
const userName = askName();
console.log('Answer "yes" if the number is prime, otherwise answer "no".');
play(userName);
