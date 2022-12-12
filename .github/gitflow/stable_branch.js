const { execSync } = require('child_process');
const { stableBranchName, remoteRepository, SemVer } = require('./utils.js');
const pkg = require('../../package.json');

const semVer = new SemVer(pkg.version);
if (semVer.patch !== 0) {
  process.exit(0);
}

const stableBranchRef = stableBranchName(semVer);

execSync(`git branch ${stableBranchRef}`);

try {
  execSync(`git push "${remoteRepository}" HEAD:${stableBranchRef} --verbose`);
} catch (e) {
  console.log('Errors:', e);
}
