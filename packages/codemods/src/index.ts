#!/usr/bin/env node

import chalk from 'chalk';
import { sync as spawnSync } from 'cross-spawn';
import prompts from 'prompts';
import { CliOptions, runCli } from './cli.js';
import getAvailableCodemods, { TRANSFORM_DIR } from './getAvailableCodemods.js';
import logger from './helpers/logger.js';

function runJSCodeShift(codemodName: string, flags: CliOptions) {
  const args = ['--parser=tsx', '--extensions=tsx,ts'];
  if (flags.dryRun) {
    args.push('--dry');
  }
  if (flags.ignoreConfig) {
    args.push(`--ignore-config=${flags.ignoreConfig}`);
  }
  if (!flags.debug) {
    args.push('--silent');
  }
  const result = spawnSync(
    'node',
    [
      require.resolve('jscodeshift/bin/jscodeshift'),
      '--no-babel',
      '--fail-on-error',
      '-t',
      `${TRANSFORM_DIR}/${codemodName}.js`,
      ...args,
      flags.glob,
    ],
    {
      stdio: 'inherit',
      shell: true,
    },
  );

  if (result.status === 1) {
    logger.error(`Codemod ${codemodName} failed to apply`);
    return;
  }
}

async function promptConfirmation(): Promise<boolean> {
  const { confirmation } = await prompts(
    {
      type: 'toggle',
      name: 'confirmation',
      message: `Would you like to continue?`,
      initial: true,
      active: 'Yes',
      inactive: 'No',
    },
    {
      onCancel: () => {
        process.exit(1);
      },
    },
  );

  return confirmation;
}

async function verifyConfiguration(workingDirectory: string, codemodName?: string) {
  logger.info(`Please ${chalk.cyan('verify')} the following information:
        working directory: ${workingDirectory}
        codemod to apply: ${codemodName ? chalk.red('all') : codemodName}
      `);
  const confirmed = await promptConfirmation();
  if (!confirmed) {
    logger.info('Exiting without changes...');
    process.exit(0);
  }
}

const run = async () => {
  const { flags, codemodName } = await runCli();

  if (codemodName && flags.glob) {
    const codemodes = getAvailableCodemods();
    if (codemodes.includes(codemodName)) {
      await verifyConfiguration(flags.glob, codemodName);
      logger.info("\n 🚀 Let's go!");
      runJSCodeShift(codemodName, flags);
    } else {
      logger.error(
        `Codemod ${codemodName} doesn't exist. Please check the available codemods by running with --list option`,
      );
    }
  }
  if (flags.all && flags.glob) {
    await verifyConfiguration(flags.glob);
    logger.info("\n 🚀 Let's go!");
    const codemodes = getAvailableCodemods();
    codemodes.forEach((codemod) => {
      if (flags.debug) {
        logger.info(`Codemod ${codemod} in process...`);
      }
      runJSCodeShift(codemod, flags);
    });
  }

  logger.info(
    `
    All done! Please check if everything is applied correctly. 
    If it's not the case - feel free to contact VKUI Team. 
    Happy coding with ${chalk.green('v6')}!`,
  );
};

run().catch((error) => {
  logger.error(error);
});
