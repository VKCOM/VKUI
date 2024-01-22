import chalk from 'chalk';
import { API } from 'jscodeshift';
import pkg from '../package.json';

export function report(api: API, message: string) {
  const { report } = api;

  const finalMessage = `${message} Advise ${chalk.white.bgBlue.bold('migration guide')} - ${
    pkg.homepage
  }#/Migrations \n\n`;

  try {
    report(finalMessage);
  } catch (error) {
    console.warn(finalMessage);
  }
}
