import * as fs from 'fs';
import * as path from 'path';
import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as github from '@actions/github';
import { SemVer } from 'semver';

function stableBranchName(semVer: SemVer) {
  return `${semVer.major}.${semVer.minor}-stable`;
}

function remoteRepository(token: string) {
  const {
    actor,
    repo: { owner, repo },
  } = github.context;

  return `https://${actor}:${token}@github.com/${owner}/${repo}`;
}

async function run(): Promise<void> {
  try {
    const token = core.getInput('token', { required: true });
    const directory = core.getInput('directory');

    const pkg = JSON.parse(fs.readFileSync(path.join(directory, 'package.json'), 'utf-8'));
    const semVer = new SemVer(pkg.version);
    if (semVer.patch !== 0) {
      return;
    }

    const stableBranchRef = stableBranchName(semVer);
    const remote = remoteRepository(token);

    // Create stable branch
    await exec.exec('git', ['branch', stableBranchRef]);

    // Push branch
    await exec.exec('git', ['push', `${remote}`, `HEAD:${stableBranchRef}`, '--verbose']);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

void run();
