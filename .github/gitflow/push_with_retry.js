const { execSync } = require("child_process");

// dangerfile depends on this message
execSync('git config --global user.name "GitHub Action"');

let count = 6;
while (count >= 0) {
  try {
    execSync("git add ./**/*.png");
    execSync(`git commit -m "CHORE: Update screenshots"`);
    execSync("git push --verbose");

    break;
  } catch (e) {
    console.error(e);

    count -= 1;

    execSync("git pull --rebase --autostash");
  }
}
