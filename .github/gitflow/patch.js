const process = require("process");
const { execSync } = require("child_process");
const SemVer = require("semver/classes/semver");
const { stableBranchName, remoteRepository, GhApi } = require("./utils.js");
const pkg = require("../../package.json");

const semVer = new SemVer(pkg.version);
const gh = new GhApi();

const full_repository = process.env.GITHUB_REPOSITORY.split("/");

const owner = full_repository[0];
const repo = full_repository[1];
const pullNumber = process.env.INPUT_GITHUB_PULL_NUMBER;

const patchCommits = gh.listCommitsOnPullRequest(owner, repo, pullNumber);

const stableBranchRef = stableBranchName(semVer);
const patchRefs = patchCommits
  .filter((commit) => commit.commit.message !== "CHORE: Update screenshots")
  .map((commit) => commit.sha)
  .join(" ");

execSync(`git fetch origin ${stableBranchRef} ${patchRefs}`);
execSync(`git checkout ${stableBranchRef}`);
try {
  execSync(`git cherry-pick ${patchRefs}`);
} catch (e) {
  console.error(e);

  const message = `
## ❌ Patch

Не удалось автоматически применить исправление на стабильной ветке.

Чтобы исправление попало в стабильную ветку, выполните следующие действия:

1. Создайте новую ветку от стабильной и примените исправления используя cherry-pick

\`\`\`bash
git checkout -b patch/pr${pullNumber} ${stableBranchRef}
git cherry-pick ${patchRefs}
\`\`\`

2. Исправьте конфликты, следуя инструкциям из терминала
3. Отправьте ветку на GitHub и создайте новый PR с последней стабильной веткой (метка patch не нужна)

\`\`\`bash
git push --set-upstream origin patch/pr${pullNumber}
gh pr create --base ${stableBranchRef}
\`\`\`  
`;

  gh.prComment(pullNumber, message);
  process.exit(1);
}

execSync(
  `git push "${remoteRepository}" HEAD:refs/heads/${stableBranchRef} --verbose`
);
