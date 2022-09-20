const { execSync } = require("child_process");

// dangerfile depends on this message
execSync('git config --global user.name "GitHub Action"');

execSync("git pull");
execSync("git add ./**/*.png");
execSync(`git commit -m "CHORE: Update screenshots"`);

let count = 6;

while (true) {
  try {
    execSync("git push --verbose");

    break;
  } catch (e) {
    console.error(e);

    count -= 1;

    if (count < 0) {
      throw e;
    }

    execSync("git pull --rebase");
  }
}
