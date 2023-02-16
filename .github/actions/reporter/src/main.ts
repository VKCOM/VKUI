import fs from 'fs';
import path from 'path';

import * as core from '@actions/core';
import * as github from '@actions/github';

import { GitHubCommentBuilder } from './comment';
import { checkFailedScreenTests } from './checkFailedScreenTests';
import { jest } from './jest';
import { lint } from './lint';
import { checkUpdatedScreenshots } from './checkUpdatedScreenshots';
import { uploadFailedScreenshots } from './uploadFailedScreenshots';

async function run(): Promise<void> {
  try {
    const token = core.getInput('token', { required: true });
    const gh = github.getOctokit(token);
    const comment = new GitHubCommentBuilder(gh);

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
      jobs.push(
        uploadFailedScreenshots(comment, gh),
        checkFailedScreenTests(e2eResults),
        checkUpdatedScreenshots,
      );
    }

    await Promise.all(jobs);
    await comment.write();
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

void run();
