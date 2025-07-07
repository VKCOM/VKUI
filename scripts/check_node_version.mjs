#!/usr/bin/env node

import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import chalk from 'chalk';
import * as semver from 'semver';

/**
 * Для версий Node.js<20
 */
const importMetaFilename = url.fileURLToPath(import.meta.url);
const importMetaDirname = path.dirname(importMetaFilename);

function usedVersion() {
  return process.versions.node;
}

async function repositoryVersion() {
  const nvmrcPath = path.resolve(importMetaDirname, '../.nvmrc');

  return (await fs.readFile(nvmrcPath, 'utf-8')).trim();
}

export async function main() {
  const used = usedVersion();
  const repository = await repositoryVersion();

  if (semver.gte(used, repository)) {
    return;
  }

  process.stderr.write('────────────────────────────────────────────────────\n');
  process.stderr.write(`${chalk.yellow('Обновите Node.js')}\n`);
  process.stderr.write(`➤ Версия в репозитории ${chalk.green(repository)}\n`);
  process.stderr.write(`➤ Используется ${chalk.red('v' + used)}\n`);

  if (!!process.env.NVM_DIR) {
    process.stderr.write(`Для обновления запустите:\n`);
    process.stderr.write(`${chalk.blue('nvm install')}\n`);
    process.stderr.write(`${chalk.blue('nvm use')}\n`);
  } else {
    process.stderr.write(`Для обновления обратитесь к инструкции:\n`);
    process.stderr.write(`${chalk.blue('https://nodejs.org/en/download')}\n`);
  }

  process.stderr.write('────────────────────────────────────────────────────\n');
}

if (process.argv[1] === importMetaFilename) {
  void main();
}
