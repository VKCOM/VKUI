const { execSync } = require("child_process");
const SemVer = require("semver/classes/semver");
const { stableBranchName } = require("./utils.js");
const pkg = require("../../package.json");

const semVer = new SemVer(pkg.version);
if (semVer.patch !== 0) {
  process.exit(0);
}

const stableBranchRef = stableBranchName(semVer);

execSync(`git branch ${stableBranchRef}`);
execSync(`git push origin ${stableBranchRef}`);
