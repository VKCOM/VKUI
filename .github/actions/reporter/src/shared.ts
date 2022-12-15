import { readFile } from 'fs/promises';

import * as github from '@actions/github';

export const updateScreensActionLink = `https://github.com/VKCOM/VKUI/actions/workflows/update_screens.yml`;

export function getPullRequestNumber() {
  const payload = github.context.payload.pull_request;
  if (!payload) {
    throw new Error('Not found PR number');
  }

  return payload.number;
}

export async function updatedViaAction(gh: ReturnType<typeof github.getOctokit>) {
  const pull_number = getPullRequestNumber();
  const params = {
    ...github.context.repo,
    pull_number,
  };
  const commits = await gh.rest.pulls.listCommits(params);

  return commits.data.some((commit) => commit.commit.message === 'CHORE: Update screenshots');
}

export async function parseFile<T>(path: string) {
  const file = await readFile(path, 'utf-8');
  return JSON.parse(file) as T;
}
