import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function run(): Promise<void> {
  try {
    let count = 18;

    async function retry(cb: () => Promise<void>, onError: () => Promise<void>) {
      while (true) {
        try {
          await cb();

          break;
        } catch (e) {
          console.error(e);

          count -= 1;

          if (count < 0) {
            throw e;
          }

          await onError();
        }
      }
    }

    await exec.exec('git', ['pull']);

    await retry(
      async () => {
        await exec.exec('git', ['add', './**/*.png']);
        await exec.exec('git', [
          'diff-index',
          '--quiet',
          'HEAD',
          '||',
          'git',
          'commit',
          '-m',
          `"CHORE: Update screenshots"`,
        ]);
      },
      async () => {
        await exec.exec('git', ['pull', '--rebase', '--autostash']);
      },
    );

    await retry(
      async () => {
        await exec.exec('git', ['push', '--verbose']);
      },
      async () => {
        await exec.exec('git', ['pull', '--rebase']);
      },
    );
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
