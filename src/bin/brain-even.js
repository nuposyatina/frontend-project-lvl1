#!/usr/bin/env node
import askName from '..';
import play from '../games/brain-even';
import sayWelcome from '../welcome';
import sayRules from '../rules';

sayWelcome();
const userName = askName();
sayRules('Answer "yes" if the number is even, otherwise answer "no".');
play(userName);
