#!/usr/bin/env node
import askName from '..';
import play from '../games/brain-prime';
import sayWelcome from '../welcome';
import sayRules from '../rules';


sayWelcome();
const userName = askName();
sayRules('Answer "yes" if the number is prime, otherwise answer "no".');
play(userName);
