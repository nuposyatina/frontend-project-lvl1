#!/usr/bin/env node
import askName from '..';
import play from '../games/brain-gcd';
import sayWelcome from '../welcome';
import sayRules from '../rules';

sayWelcome();
const userName = askName();
sayRules('Find the greatest common divisor of given numbers');
play(userName);
