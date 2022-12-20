import path from 'path';

import * as core from '@actions/core';
import * as github from '@actions/github';

import { GitHubCommentBuilder } from './comment';
import { checkFailedScreenTests } from './checkFailedScreenTests';
import { jest } from './jest';
import { lint } from './lint';
import { coverage } from './coverage';
import { checkUpdatedScreenshots } from './checkUpdatedScreenshots';
import { uploadFailedScreenshots } from './uploadFailedScreenshots';

async function run(): Promise<void> {
  try {
    const token = core.getInput('token', { required: true });
    const gh = github.getOctokit(token);

    const comment = new GitHubCommentBuilder(gh);

    await Promise.all([
      jest(path.join(process.cwd(), 'test-results.json')),
      lint(path.join(process.cwd(), 'lint-results.json')),
      coverage(path.join(process.cwd(), 'coverage', 'coverage-summary.json'), comment),
      uploadFailedScreenshots(comment, gh),
      checkFailedScreenTests(path.join(process.cwd(), 'e2e-results.json')),
      checkUpdatedScreenshots(gh),
    ]);

    await comment.write();
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

void run();
