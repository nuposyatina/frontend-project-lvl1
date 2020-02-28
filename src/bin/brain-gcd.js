#!/usr/bin/env node
import askName from '..';
import play from '../games/brain-gcd';
import sayWelcome from '../welcome';

sayWelcome();
const userName = askName();
console.log('Find the greatest common divisor of given numbers');
play(userName);
