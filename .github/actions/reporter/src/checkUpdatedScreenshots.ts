import * as core from '@actions/core';
import * as github from '@actions/github';
import { getPullRequestNumber, updatedViaAction, updateScreensActionLink } from './shared';

export async function checkUpdatedScreenshots(gh: ReturnType<typeof github.getOctokit>) {
  const pull_number = getPullRequestNumber();
  const params = {
    ...github.context.repo,
    pull_number,
  };

  const files = await gh.rest.pulls.listFiles(params);

  const hasModifiedScreens = files.data.some((file) =>
    file.filename.includes('__image_snapshots__'),
  );
  const hasUpdatedViaAction = await updatedViaAction(gh);

  if (hasModifiedScreens && !hasUpdatedViaAction) {
    core.warning(
      `Some screenshots were manually modified in this PR - please use the [action](${updateScreensActionLink}) next time.`,
      {
        title: 'Screenshots',
      },
    );
  }
}
