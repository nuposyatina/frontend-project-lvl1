#!/usr/bin/env node
import askName from '..';
import play from '../games/brain-calc';
import sayWelcome from '../welcome';

sayWelcome();
const userName = askName();
console.log('What is the result of the expression?');
play(userName);
