import * as fs from 'fs';
import * as path from 'path';
import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as github from '@actions/github';
import { SemVer } from 'semver';
import { getPatchInstructions } from './message';

function getPrNumber() {
  const pullRequest = github.context.payload.pull_request;
  if (!pullRequest) {
    throw new Error('Not found PR number');
  }

  return pullRequest.number;
}

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
    const forked =
      github.context.payload.pull_request?.base.repo.id !==
      github.context.payload.pull_request?.head.repo.id;
    const token = core.getInput('token', { required: true });
    const directory = core.getInput('directory');
    const pullNumber = getPrNumber();

    const gh = github.getOctokit(token);
    const createComment = async (body: string) => {
      await gh.rest.issues.createComment({
        ...github.context.repo,
        issue_number: pullNumber,
        body,
      });
    };

    const pkg = JSON.parse(fs.readFileSync(path.join(directory, 'package.json'), 'utf-8'));
    const semVer = new SemVer(pkg.version);

    const stableBranchRef = stableBranchName(semVer);
    const remote = remoteRepository(token);

    const patchCommits = await gh.rest.pulls.listCommits({
      ...github.context.repo,
      pull_number: pullNumber,
    });
    const patchRefs = patchCommits.data
      .filter((commit) => commit.commit.message !== 'CHORE: Update screenshots')
      .map((commit) => commit.sha);

    if (forked) {
      const message = getPatchInstructions(
        '⚠️ Patch (forked repo)',
        'Необходимо вручную перенести исправление в стабильную ветку.',
        {
          stableBranchRef,
          pullNumber,
          patchRefs,
        },
      );

      await createComment(message);
      core.warning('Необходимо вручную перенести исправление в стабильную ветку');

      return;
    }

    try {
      await exec.exec('git', ['fetch', '--no-tags', 'origin', stableBranchRef, ...patchRefs]);
      await exec.exec('git', ['checkout', stableBranchRef]);

      for (const patchRef of patchRefs) {
        await exec.exec('git', ['cherry-pick', '--no-commit', patchRef]);
        await exec.exec('git', ['checkout', 'HEAD', '**/__image_snapshots__/*.png']);
        await exec.exec('git', ['commit', '--no-verify', '--no-edit']);
      }
    } catch (e) {
      console.error(e);

      const message = getPatchInstructions(
        '❌ Patch',
        'Не удалось автоматически применить исправление на стабильной ветке.',
        {
          stableBranchRef,
          pullNumber,
          patchRefs,
        },
      );

      await createComment(message);
      throw new Error('Не удалось автоматически применить исправление на стабильной ветке');
    }

    await exec.exec('git', [
      'push',
      `${remote}`,
      `HEAD:refs/heads/${stableBranchRef}`,
      '--verbose',
    ]);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

void run();
