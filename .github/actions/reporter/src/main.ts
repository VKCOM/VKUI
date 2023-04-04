import fs from 'fs';
import path from 'path';
import * as core from '@actions/core';

import { e2e } from './e2e';
import { jest } from './jest';
import { lint } from './lint';
import { playwrightReport } from './playwrightReport';

async function run(): Promise<void> {
  try {
    const jobs = [];
    const lintResults = path.join(process.cwd(), 'lint-results.json');
    const testResults = path.join(process.cwd(), 'test-results.json');
    const a11yResults = path.join(process.cwd(), 'a11y-results.json');
    const e2eResults = path.join(process.cwd(), 'e2e-results.json');

    if (fs.existsSync(lintResults)) {
      jobs.push(lint(lintResults));
    }

    if (fs.existsSync(testResults)) {
      jobs.push(jest(testResults));
    }

    if (fs.existsSync(a11yResults)) {
      jobs.push(jest(a11yResults));
    }

    if (fs.existsSync(e2eResults)) {
      jobs.push(e2e(e2eResults));
    }

    const playwrightReportURL = core.getInput('playwrightReportURL', { required: false });
    const token = core.getInput('playwrightReportURL', { required: false });

    if (playwrightReportURL && token) {
      jobs.push(playwrightReport(playwrightReportURL, token));
    }

    await Promise.all(jobs);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

void run();
