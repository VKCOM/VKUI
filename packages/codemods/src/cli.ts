import fs from 'fs';
import chalk from 'chalk';
import { Command } from 'commander';
import prompts from 'prompts';
import { autoDetectVKUIVersion } from './autoDetectVKUIVersion';
import getAvailableCodemods from './getAvailableCodemods.js';
import pkg from '../package.json';
import logger from './helpers/logger.js';

export interface CliOptions {
  list: boolean;
  path: string[];
  inputFile: string;
  logFile: string;
  dryRun: boolean;
  ignoreConfig: string;
  debug: boolean;
  all: boolean;
  alias: string;
  transformsVersion: string;
}

export interface Cli {
  flags: CliOptions;
  codemods: string[];
  transformsVersion: string;
}

const promptAvailableCodemods = async (codemods: string[]): Promise<string[]> => {
  const { value } = await prompts(
    {
      type: 'multiselect',
      name: 'value',
      message: 'Pick codemods',
      choices: codemods.map((name) => ({ title: name, value: name })),
    },
    {
      onCancel: () => {
        process.exit(1);
      },
    },
  );
  if (value.length === 0) {
    logger.error('No codemods picked.');
    process.exit(1);
  }

  return value;
};

const promptTransformVersions = async (): Promise<string> => {
  const { value } = await prompts(
    {
      type: 'select',
      name: 'value',
      message: 'Pick version',
      choices: [
        { title: 'v6', value: '6' },
        { title: 'v7', value: '7' },
      ],
    },
    {
      onCancel: () => {
        process.exit(1);
      },
    },
  );

  return value;
};

export const runCli = async (): Promise<Cli> => {
  const program = new Command('@vkontakte/vkui-codemod')
    .version(pkg.version || 'unknown')
    .argument('[codemod-names...]', 'which codemods should be applied')
    .usage(`${chalk.green('[codemod-names...]')}`)
    .option('-l --list', 'list available codemods')
    .option('--all', 'apply all available codemods')
    .option(
      '-tv --transforms-version <transformsVersion>',
      'vkui major version transforms (available versions: "6", "7")',
    )
    .option(
      '-p --path [paths...]',
      'file paths where codemods need to apply (space separated list), default: current directory',
    )
    .option('--input-file <file>', 'apply codemods only to file/directory listed in the file')
    .option(
      '--log-file <file>',
      'log migration instructions with required manual changes to the file instead of the console',
    )
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
  let codemods = program.processedArgs[0] as string[];
  let transformsVersion = options.transformsVersion || autoDetectVKUIVersion();

  if (!transformsVersion) {
    transformsVersion = await promptTransformVersions();
  }

  const availableCodemods = getAvailableCodemods(transformsVersion);

  if (options.list) {
    logger.info(availableCodemods);
    process.exit(0);
  }

  if (options.inputFile && !fs.existsSync(options.inputFile)) {
    logger.error(`Input file ${options.inputFile} does not exist.`);
    process.exit(1);
  }

  if (codemods.length > 0) {
    const wrongCodemods = [];
    for (let codemodName of codemods) {
      if (!availableCodemods.includes(codemodName)) {
        wrongCodemods.push(codemodName);
      }
    }
    if (wrongCodemods.length > 0) {
      logger.error(
        `The following codemods doesn't exist: ${wrongCodemods}. Please check the available codemods by running with --list option`,
      );
      process.exit(1);
    }
  }

  if (codemods.length === 0 && !options.all) {
    codemods = await promptAvailableCodemods(availableCodemods);
  }

  if (options.all) {
    codemods = availableCodemods;
  }

  return {
    flags: options,
    codemods,
    transformsVersion,
  };
};
