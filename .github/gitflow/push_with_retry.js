const { execSync } = require("child_process");

execSync('git config --global user.name "GitHub Action"');
execSync("git add ./**/*.png");
execSync(`git commit -m "CHORE: Update screenshots"`);

let count = 6;
while (count >= 0) {
  try {
    execSync("git push --verbose");

    break;
  } catch (e) {
    console.error(e);

    count -= 1;

    execSync("git pull --rebase --autostash");
  }
}
