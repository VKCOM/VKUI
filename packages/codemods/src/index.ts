#!/usr/bin/env node

import chalk from 'chalk';
import { sync as spawnSync } from 'cross-spawn';
import prompts from 'prompts';
import { CliOptions, runCli } from './cli.js';
import { TRANSFORM_DIR } from './getAvailableCodemods.js';
import logger from './helpers/logger.js';

interface JSCodeShiftRunnerProps {
  codemodName: string;
  transformsVersion: string;
  paths: string[];
  flags: CliOptions;
}

interface VerifyConfigurationProps {
  paths: string[];
  inputFile?: string;
  codemodNames?: string[];
  transformsVersion: string;
}

const MAX_PRINTED_PATHS = 5;

function runJSCodeShift({ codemodName, transformsVersion, paths, flags }: JSCodeShiftRunnerProps) {
  const args = ['--parser=tsx', '--extensions=tsx,ts', `--alias=${flags.alias}`];
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
      `${TRANSFORM_DIR}/v${transformsVersion}/${codemodName}.js`,
      ...args,
      '--ignore-pattern node_modules',
      ...(flags.inputFile ? [`--stdin < ${flags.inputFile}`] : paths),
    ],
    {
      stdio: 'inherit',
      shell: true,
    },
  );

  if (result.status === 1) {
    logger.error(`Codemod ${codemodName} failed to apply.`);
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

function getWorkingPathsInfo(paths: string[], inputFile?: string) {
  if (inputFile) {
    return `from ${inputFile}`;
  }

  if (paths.length > MAX_PRINTED_PATHS) {
    return `${paths.slice(0, MAX_PRINTED_PATHS).join(', ')} and ${paths.length - MAX_PRINTED_PATHS} more`;
  }

  return paths.join(', ');
}

async function verifyConfiguration({
  paths,
  inputFile,
  codemodNames,
  transformsVersion,
}: VerifyConfigurationProps) {
  const formattedPaths = getWorkingPathsInfo(paths, inputFile);

  logger.info(`Please ${chalk.cyan('verify')} the following information:
        working files/directories: ${formattedPaths}
        target vkui major version: ${transformsVersion}
        codemods to apply: ${codemodNames ? codemodNames : chalk.red('all')}
      `);
  const confirmed = await promptConfirmation();
  if (!confirmed) {
    logger.info('Exiting without changes...');
    process.exit(0);
  }
}

const run = async () => {
  const { flags, codemods, transformsVersion } = await runCli();

  const paths = flags.path ? flags.path : [process.cwd()];

  await verifyConfiguration({
    paths,
    inputFile: flags.inputFile,
    transformsVersion,
    codemodNames: flags.all ? undefined : codemods,
  });

  logger.info("\n 🚀 Let's go!");
  codemods.forEach((codemodName) => {
    logger.info(`Codemod ${codemodName} in process...`);
    runJSCodeShift({ codemodName, transformsVersion, paths, flags });
  });

  logger.info(
    `
    All done! Please check that everything is applied correctly.
    If it's not the case - feel free to contact VKUI Team.
    Do not forget to run ${chalk.cyan.bold(
      'prettier',
    )} to eliminate unwanted code formatting after applying migrations.
    Happy coding with ${chalk.green.bold(`v${transformsVersion}`)}!`,
  );
};

run().catch((error) => {
  logger.error(error);
});
