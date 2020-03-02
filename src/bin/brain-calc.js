#!/usr/bin/env node
import askName from '..';
import play from '../games/brain-calc';
import sayWelcome from '../welcome';
import sayRules from '../rules';

sayWelcome();
const userName = askName();
sayRules('What is the result of the expression?');
play(userName);
