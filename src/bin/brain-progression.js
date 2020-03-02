#!/usr/bin/env node
import askName from '..';
import play from '../games/brain-progression';
import sayWelcome from '../welcome';

sayWelcome();
const userName = askName();
console.log('What number is missing in the progression?');
play(userName);
