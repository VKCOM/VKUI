import chalk from 'chalk';
import { Command } from 'commander';
import prompts from 'prompts';
import getAvailableCodemods from './getAvailableCodemods.js';
import pkg from '../package.json';
import logger from './helpers/logger.js';

export interface CliOptions {
  list: boolean;
  path: string;
  dryRun: boolean;
  ignoreConfig: string;
  debug: boolean;
  all: boolean;
  alias: string;
}

export interface Cli {
  flags: CliOptions;
  codemodName: string;
}

const trimStringValue = (value: string | undefined) =>
  typeof value === 'string' ? value.trim() : value;

const promptAvailableCodemods = async (codemods: string[]): Promise<string> => {
  const { codemod } = await prompts(
    {
      type: 'select',
      name: 'codemod',
      message: 'Pick a codemod',
      initial: 0,
      choices: codemods.map((name) => ({ title: name, value: name })),
    },
    {
      onCancel: () => {
        process.exit(1);
      },
    },
  );

  return codemod;
};

export const runCli = async (): Promise<Cli> => {
  const program = new Command('@vkontakte/vkui-codemod')
    .version(pkg.version || 'unknown')
    .argument('[codemod-name]', 'which codemod should be applied', trimStringValue)
    .usage(`${chalk.green('[codemod-name]')}`)
    .option('-l --list', 'list available codemods')
    .option('--all', 'apply all available codemods')
    .option('-p --path <paths>', 'path to files in which to apply the codemods')
    .option('--dry-run', 'no changes are made to files')
    .option(
      '--ignore-config <config>',
      'ignore files if they match patterns sourced from a configuration file (e.g. a .gitignore)',
    )
    .option('--debug', `all logs are shown`)
    .option('--alias <alias>', `in case you have adapter over original library`, '@vkontakte/vkui')
    .configureOutput({
      writeErr: (str) => logger.info(`${chalk.red(str)}`),
    })
    .parse(process.argv);

  const options = program.opts() as CliOptions;

  let codemodName = program.args[0];

  if (options.list) {
    const codemods = getAvailableCodemods();
    logger.info(codemods);
    process.exit(0);
  }

  if (!codemodName && !options.all) {
    const codemods = getAvailableCodemods();
    codemodName = await promptAvailableCodemods(codemods);
  }

  return {
    flags: options,
    codemodName,
  };
};
