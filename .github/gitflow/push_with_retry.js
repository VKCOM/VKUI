const { execSync } = require("child_process");

// dangerfile depends on this message
execSync('git config --global user.name "GitHub Action"');

let count = 6;

while (true) {
  try {
    execSync("git add ./**/*.png");
    execSync(`git commit -m "CHORE: Update screenshots"`);
    execSync("git push --verbose");

    break;
  } catch (e) {
    console.error(e);

    count -= 1;

    if (count < 0) {
      throw e;
    }

    execSync("git pull --rebase --autostash");
  }
}
