import { fail, message, warn, danger, markdown } from 'danger';
const dangerJest = require('danger-plugin-jest').default;
const { readFile, readdir, access } = require('fs').promises;
const md5 = require('md5');
const path = require('path');
const AWS = require('aws-sdk/global');
const S3 = require('aws-sdk/clients/s3');

const { AWS_ACCESS_KEY_ID, AWS_SECRET_KEY, AWS_ENDPOINT } = process.env;
const rootDir = path.join(__dirname, '../..');

const lintPath = path.join(rootDir, 'lint-results.json');
function lint() {
  return readFile(lintPath)
    .then((file) => {
      const lintReport = JSON.parse(file);
      for (const { messages, filePath } of lintReport) {
        const relPath = path.relative(rootDir, filePath);
        for (const message of messages) {
          const text = `${message.message} \`${message.ruleId}\``;
          if (message.severity === 2) {
            fail(text, relPath, message.line);
          } else if (message.severity === 1) {
            warn(text, relPath, message.line);
          }
        }
      }
    })
    .catch((err) => {
      fail(`Could not read lint results: ${err.message}`);
    });
}

const coveragePath = path.join(rootDir, 'coverage', 'coverage-summary.json');
function coverage() {
  return readFile(coveragePath)
    .then((file) => {
      const { total } = JSON.parse(file);
      const formatCoverage = (kind, { covered, total, pct }) => `
      <tr>
        <td>${kind}</td>
        <td>${covered} / ${total}</td>
        <td style="text-align: right">${pct.toFixed(2)}%</td>
      </tr>`;
      markdown(
        `## Code coverage\n\n<table>${Object.entries(total)
          .map(([kind, cov]) => formatCoverage(kind, cov))
          .join('')
          .replace(/(^|\n) +/g, '')}</table>`,
      );
    })
    .catch((err) => {
      warn(`Could not read coverage file: "${err.message}"`);
    });
}

const updatedViaAction = () =>
  danger.github &&
  danger.github.commits.some((commit) => commit.commit.message === 'CHORE: Update screenshots');

const updateScreensActionLink = `https://github.com/VKCOM/VKUI/actions/workflows/update_screens.yml`;
const UPLOAD_BUCKET = 'vkui-screenshot';
const awsHost = `${UPLOAD_BUCKET}.${AWS_ENDPOINT}`;
console.log('AWS:', awsHost);
const diffDir = path.join(rootDir, '__diff_output__');
async function uploadFailedScreenshots() {
  const { github } = danger;
  const pathPrefix = github ? github.pr.number : 'local';
  const failedScreens = await access(diffDir).then(
    () => readdir(diffDir),
    () => [],
  );

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

  if (!failedScreens.length) {
    return;
  }

  if (!updatedViaAction()) {
    warn(
      `${failedScreens.length} changed screenshots found — review & update them via ["Update Screenshots" action](${updateScreensActionLink}) before merging.`,
    );
  }

  let message = '## Changed screenshots\n\n';

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
      warn(`Could not upload screenshot diff ${screenName}: ${err.message}`);
    }
  }

  markdown(message);
}

async function checkUpdatedScreenshots() {
  const hasModifiedScreens = danger.git.modified_files.some((file) =>
    /__image_snapshots__/.test(file),
  );
  if (hasModifiedScreens && !updatedViaAction()) {
    warn(
      `Some screenshots were manually modified in this PR - please use the [action](${updateScreensActionLink}) next time.`,
    );
  }
}

async function removeDiffs(s3, prefix) {
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
          Objects: list.map((obj) => ({ Key: obj.Key })),
        },
      })
      .promise();
  }
}

async function checkFailedScreenTests({ testResultsJsonPath }) {
  const { numFailedTests, snapshot, testResults } = JSON.parse(await readFile(testResultsJsonPath));
  // ignore failed screnshots
  if (numFailedTests > snapshot.unmatched) {
    testResults
      .filter((suite) => suite.status === 'failed')
      .forEach((failed) => fail(failed.message));
  }
}

Promise.all([
  dangerJest({ testResultsJsonPath: path.join(rootDir, 'test-results.json') }),
  lint(),
  coverage(),
  uploadFailedScreenshots(),
  checkFailedScreenTests({
    testResultsJsonPath: path.join(rootDir, 'e2e-results.json'),
  }),
  checkUpdatedScreenshots(),
]);
