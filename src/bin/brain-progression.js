#!/usr/bin/env node
import askName from '..';
import play from '../games/brain-progression';
import sayWelcome from '../welcome';
import sayRules from '../rules';

sayWelcome();
const userName = askName();
sayRules('What number is missing in the progression?');
play(userName);
