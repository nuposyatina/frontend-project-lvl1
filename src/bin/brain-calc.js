#!/usr/bin/env node
import askName from '..';
import play from '../games/brain-calc';
import sayWelcome from '../welcome';

sayWelcome();
console.log('What is the result of the expression?');
const userName = askName();
play(userName);
