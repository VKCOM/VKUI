import { readFile } from 'fs/promises';

import * as core from '@actions/core';

import { GitHubCommentBuilder } from './comment';

interface Stat {
  total: number;
  covered: number;
  skipped: number;
  pct: number;
}

interface Stats {
  lines: Stat;
  statements: Stat;
  functions: Stat;
  branches: Stat;
  branchesTrue?: Stat;
}

interface Coverage {
  total: Stats;
  [key: string]: Stats;
}

async function parseFile(coveragePath: string) {
  const file = await readFile(coveragePath, 'utf-8');
  return JSON.parse(file) as Coverage;
}

export async function coverage(coveragePath: string, comment: GitHubCommentBuilder) {
  try {
    const { total } = await parseFile(coveragePath);

    const formatCoverage = (kind_1: string, { covered, total: total_1, pct }: Stat) => `
      <tr>
        <td>${kind_1}</td>
        <td>${covered} / ${total_1}</td>
        <td style="text-align: right">${pct.toFixed(2)}%</td>
      </tr>`;

    const message = `## Code coverage\n\n<table>${Object.entries(total)
      .map(([kind_2, cov]: [string, Stat]) => formatCoverage(kind_2, cov))
      .join('')
      .replace(/(^|\n) +/g, '')}</table>`;

    comment.add(message);
  } catch (err) {
    if (err instanceof Error) core.warning(`Could not read coverage file: "${err.message}"`);
  }
}
