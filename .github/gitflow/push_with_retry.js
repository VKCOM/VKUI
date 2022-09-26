const { execSync } = require("child_process");

// dangerfile depends on this message
execSync('git config --global user.name "GitHub Action"');

let count = 10;

function retry(cb, onError) {
  while (true) {
    try {
      cb();

      break;
    } catch (e) {
      console.log(JSON.stringify(e));

      count -= 1;

      if (count < 0) {
        throw e;
      }

      onError();
    }
  }
}

execSync("git pull");

retry(
  function () {
    execSync("git add ./**/*.png");
    execSync(`git commit -m "CHORE: Update screenshots"`);
  },
  function () {
    execSync("git pull --rebase --autostash");
  }
);

retry(
  function () {
    execSync("git push --verbose");
  },
  function () {
    execSync("git pull --rebase");
  }
);
