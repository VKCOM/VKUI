const process = require('process');
const { execSync } = require('child_process');
const { getPatchInstructions } = require('./messages');
const { stableBranchName, remoteRepository, GhApi, SemVer } = require('./utils.js');
const pkg = require('../../package.json');

const semVer = new SemVer(pkg.version);
const gh = new GhApi();

const full_repository = process.env.GITHUB_REPOSITORY.split('/');

const owner = full_repository[0];
const repo = full_repository[1];
const pullNumber = process.env.INPUT_GITHUB_PULL_NUMBER;

const patchCommits = gh.listCommitsOnPullRequest(owner, repo, pullNumber);

const stableBranchRef = stableBranchName(semVer);
const patchRefs = patchCommits
  .filter((commit) => commit.commit.message !== 'CHORE: Update screenshots')
  .map((commit) => commit.sha)
  .join(' ');

const forked = process.env.FORKED === "true";

if (forked) {
  const message = getPatchInstructions(
    '⚠️ Patch (forked repo)',
    'Необходимо вручную перенести исправление в стабильную ветку.',
    {
      stableBranchRef,
      pullNumber,
      patchRefs,
    },
  );

  gh.prComment(pullNumber, message);
  process.exit(0);
}

execSync(`git fetch origin ${stableBranchRef} ${patchRefs}`);
execSync(`git checkout ${stableBranchRef}`);
try {
  execSync(`git cherry-pick ${patchRefs}`);
} catch (e) {
  console.error(e);

  const message = getPatchInstructions(
    '❌ Patch',
    'Не удалось автоматически применить исправление на стабильной ветке.',
    {
      stableBranchRef,
      pullNumber,
      patchRefs,
    },
  );

  gh.prComment(pullNumber, message);
  process.exit(1);
}

execSync(`git push "${remoteRepository}" HEAD:refs/heads/${stableBranchRef} --verbose`);
