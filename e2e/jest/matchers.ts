import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import { useDocker } from '../detectEnv';

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customSnapshotIdentifier: ({ currentTestName, counter }) => {
    return `${currentTestName.toLowerCase().replace(/ /g, '-')}-${counter}`;
  },
} as any);

beforeAll(async () => {
  const host = useDocker ? 'host.docker.internal' : 'localhost';
  await page.goto(`http://${host}:9000`);
});

afterEach(async () => {
  /* istanbul ignore next */
  await page.evaluate(() => window['testHandle'].unmount());
});

expect.extend({ toMatchImageSnapshot });
