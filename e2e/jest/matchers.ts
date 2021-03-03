import path from 'path';
import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import { useDocker } from '../detectEnv';

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customSnapshotIdentifier: ({ currentTestName, counter }) => {
    return `${currentTestName.toLowerCase().replace(/ /g, '-')}-${counter}`;
  },
  customDiffDir: path.join(__dirname, '../..', '__diff_output__'),
});

beforeAll(async () => {
  const host = useDocker ? 'host.docker.internal' : 'localhost';
  await page.goto(`http://${host}:9000`);
});

afterEach(async () => {
  /* istanbul ignore next */
  await page.evaluate(() => (window as any).testHandle.unmount());
  await jestPlaywright.saveCoverage(page);
});

expect.extend({ toMatchImageSnapshot });
