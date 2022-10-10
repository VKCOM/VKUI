const { execSync } = require("child_process");
const process = require("process");

const branch = process.env.BRANCH;

// dangerfile depends on this message
execSync('git config --global user.name "GitHub Action"');
execSync('git config --global user.email "actions@github.com"');

let count = 18;

function retry(cb, onError) {
  while (true) {
    try {
      cb();

      break;
    } catch (e) {
      console.error(e);

      count -= 1;

      if (count < 0) {
        throw e;
      }

      onError();
    }
  }
}

execSync(`git pull --depth=1 origin ${branch}`);

retry(
  function () {
    execSync("git add ./**/*.png");
    execSync(
      `git diff-index --quiet HEAD || git commit -m "CHORE: Update screenshots"`
    );
  },
  function () {
    execSync(`git pull --rebase --autostash --depth=1 origin ${branch}`);
  }
);

retry(
  function () {
    execSync("git push --verbose");
  },
  function () {
    execSync(`git pull --rebase --depth=1 origin ${branch}`);
  }
);
