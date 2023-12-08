import chalk from 'chalk';
import { API } from 'jscodeshift';
import pkg from '../package.json';

export function report(api: API, message: string) {
  const { report } = api;
  report(
    `${message} Advise ${chalk.white.bgBlue.bold('migration guide')} - ${
      pkg.homepage
    }#/Migration \n\n`,
  );
}
