import { fail, message, warn, danger, markdown } from 'danger';
const dangerJest = require('danger-plugin-jest').default;
const { readFile } = require('fs').promises;
const md5 = require('md5');
const path = require('path');
const glob = require('glob');
const { promisify } = require('util')
const pglob = promisify(glob);
const AWS = require('aws-sdk/global');
const S3 = require('aws-sdk/clients/s3');

const { AWS_ACCESS_KEY_ID, AWS_SECRET_KEY, AWS_ENDPOINT } = process.env;

const lintPath = path.join(__dirname, 'lint-results.json');
function lint() {
  return readFile(lintPath).then(file => {
    const lintReport = JSON.parse(file)
    for (const { messages, filePath } of lintReport) {
      const relPath = path.relative(__dirname, filePath)
      for (const message of messages) {
        const text = `${message.message} \`${message.ruleId}\``
        if (message.severity === 2) {
          fail(text, relPath, message.line);
        } else if (message.severity === 1) {
          warn(text, relPath, message.line);
        }
      }
    }
  });
}

function coverage() {
  return readFile(path.join(__dirname, 'coverage', 'coverage-summary.json')).then(file => {
    const { total } = JSON.parse(file)
    const formatCoverage = (kind, { covered, total, pct }) => `${covered} / ${total} ${kind} (${pct}%)`
    message(`Code coverage: ${
      Object.entries(total).map(([kind, cov]) => formatCoverage(kind, cov)).join(', ')
    }`)
  })
}

const updateScreensActionLink = `https://github.com/VKCOM/VKUI/actions?query=workflow%3A"Update+screenshots"`;
const UPLOAD_BUCKET = 'vkui-screenshots';
const awsHost = `${UPLOAD_BUCKET}.${AWS_ENDPOINT}`;
async function uploadFailedScreenshots() {
  const diffDir = '__diff_output__'
  const { github } = danger;
  const pathPrefix = github ? github.pr.number : 'local';
  const failedScreens = await pglob(path.join(__dirname, '**', diffDir, '*.png'));

  if (failedScreens.length) {
    warn(`${failedScreens.length} changed screenshots found — review & update them via ["Update Screenshots" action](${updateScreensActionLink}) before merging.`);
  }

  if (!AWS_ENDPOINT || !AWS_ACCESS_KEY_ID || !AWS_SECRET_KEY) {
    // Silently skip screenshot reporting if credentials missing
    console.log('AWS credentials missing - skip screenshot reporting');
    return;
  }

  let s3;
  try {
    s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      endpoint: AWS_ENDPOINT,
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_KEY,
    });
  } catch (err) {
    warn(`Could not create S3 client - aborting screen test reporter.`);
    return;
  }

  try {
    await removeDiffs(s3, `${pathPrefix}/`);
  } catch (err) {
    warn(`Could not purge old screenshots from S3: "${err.message}"`);
  }

  for (const failedScreen of failedScreens) {
    const screenName = path.parse(failedScreen).name;
    const fileContents = await readFile(failedScreen);
    const key = `${pathPrefix}/${screenName}-${md5(fileContents)}.png`;
    try {
      await s3.putObject({
        Body: fileContents,
        Bucket: UPLOAD_BUCKET,
        Key: key,
        ContentType: 'image/png',
        ACL: 'public-read',
      }).promise();
      markdown(`
        <details>
          <summary>Screenshot <code>${screenName}</code> failed</summary>
          <img src="https://${awsHost}/${key}">
        </details>
      `.replace(/(^|\n) +/g, ''));
    } catch (err) {
      warn(`Counld not upload screenshot diff ${screenName}: ${err.message}`);
    }
  }
}

async function checkUpdatedScreenshots() {
  if (danger.git.modified_files.some(file => /__image_snapshots__/.test(file))) {
    warn('Some screenshots were modified in this PR');
  }
}

async function removeDiffs(s3, prefix) {
  const list = (await s3.listObjects({
    Bucket: UPLOAD_BUCKET,
    Prefix: prefix,
  }).promise()).Contents;
  if (list && list.length !== 0) {
    await s3.deleteObjects({
      Bucket: UPLOAD_BUCKET,
      Delete: {
        Objects: list.map(obj => ({ Key: obj.Key })),
      },
    }).promise();
  }
}

Promise.all([
  dangerJest(),
  lint(),
  coverage(),
  uploadFailedScreenshots(),
  checkUpdatedScreenshots(),
]);
