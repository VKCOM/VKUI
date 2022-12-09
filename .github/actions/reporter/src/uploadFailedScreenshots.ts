import { readFile, readdir, access } from 'fs/promises';
import path from 'path';

import * as core from '@actions/core';
import * as github from '@actions/github';
import S3 from 'aws-sdk/clients/s3';
import md5 from 'md5';

import { getPullRequestNumber, updatedViaAction, updateScreensActionLink } from './shared';
import { GitHubCommentBuilder } from './comment';

const UPLOAD_BUCKET = 'vkui-screenshot';

const diffDir = path.join(process.cwd(), '__diff_output__');

export async function uploadFailedScreenshots(
  comment: GitHubCommentBuilder,
  gh: ReturnType<typeof github.getOctokit>,
) {
  const awsEndpoint = core.getInput('awsEndpoint', { required: true });
  const awsAccessKeyId = core.getInput('awsAccessKeyId', { required: true });
  const awsSecretKey = core.getInput('awsSecretKey', { required: true });

  const pathPrefix = getPullRequestNumber().toString();
  const failedScreens = await access(diffDir).then(
    () => readdir(diffDir),
    () => [],
  );

  if (!awsEndpoint || !awsAccessKeyId || !awsSecretKey) {
    // Silently skip screenshot reporting if credentials missing
    console.log('AWS credentials missing - skip screenshot reporting');
    return;
  }

  let s3: S3;
  try {
    s3 = new S3({
      apiVersion: '2006-03-01',
      endpoint: awsEndpoint,
      accessKeyId: awsAccessKeyId,
      secretAccessKey: awsSecretKey,
    });
  } catch (err) {
    core.warning(`Could not create S3 client - aborting screen test reporter.`, {
      title: 'Screenshots',
    });
    return;
  }

  try {
    await removeDiffs(s3, `${pathPrefix}/`);
  } catch (err) {
    if (err instanceof Error)
      core.warning(`Could not purge old screenshots from S3: "${err.message}"`, {
        title: 'Screenshots',
      });
  }

  if (!failedScreens.length) {
    return;
  }

  const hasUpdatedViaAction = await updatedViaAction(gh);

  if (!hasUpdatedViaAction) {
    core.warning(
      `${failedScreens.length} changed screenshots found — review & update them via ["Update Screenshots" action](${updateScreensActionLink}) before merging.`,
      {
        title: 'Screenshots',
      },
    );
  }

  let message = '## Changed screenshots\n\n';

  const awsHost = `${UPLOAD_BUCKET}.${awsEndpoint}`;
  for (const failedScreen of failedScreens) {
    const screenName = path.parse(failedScreen).name.replace(/\-diff$/, '');
    const fileContents = await readFile(path.join(diffDir, failedScreen));
    const key = `${pathPrefix}/${screenName}-${md5(fileContents)}.png`;
    try {
      await s3
        .putObject({
          Body: fileContents,
          Bucket: UPLOAD_BUCKET,
          Key: key,
          ContentType: 'image/png',
          ACL: 'public-read',
        })
        .promise();
      message += `
        <details style="margin: 0">
          <summary style="padding: 8px 0"><code>${screenName}</code></summary>
          <img src="https://${awsHost}/${key}">
        </details>
      `.replace(/(^|\n) +/g, '');
    } catch (err) {
      if (err instanceof Error)
        core.warning(`Could not upload screenshot diff ${screenName}: ${err.message}`, {
          title: 'screenshots',
        });
    }
  }

  comment.add(message);
}

async function removeDiffs(s3: S3, prefix: string) {
  const list = (
    await s3
      .listObjects({
        Bucket: UPLOAD_BUCKET,
        Prefix: prefix,
      })
      .promise()
  ).Contents;
  if (list && list.length !== 0) {
    await s3
      .deleteObjects({
        Bucket: UPLOAD_BUCKET,
        Delete: {
          Objects: list.map((obj) => ({ Key: obj.Key! })),
        },
      })
      .promise();
  }
}
