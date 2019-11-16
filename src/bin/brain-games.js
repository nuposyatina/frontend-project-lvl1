#!/usr/bin/env node
import askName from '../index';

console.log('Welcome to the Brain Games!');
const userName = askName();
console.log(`Hello, ${userName}!`);